const puppeteer = require('puppeteer')
const fs = require('fs')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT; Win 64; x64; rv:73.0) Gecko/20100101 Firefox/73.0',
  )
  const initLink = 'https://www2.hm.com/en_us/men/new-arrivals/clothes.html'

  const to = async (link, time = 2000) => {
    await page.goto(link)
    await page.waitForTimeout(time)
  }

  await page.goto(initLink)
  await (async () => {
    const totalProducts = await page.evaluate(
      () => document.querySelectorAll('.product-item').length,
    )

    const data = []

    await page.click(
      '#page-content > div > div:nth-child(3) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label',
    )

    for (
      let productsCount = 1;
      productsCount <= totalProducts;
      productsCount++
    ) {
      data.push({})

      productsCountStr = productsCount.toString()

      //ProdcuctsListPage

      data[productsCount - 1].img = await page.$eval(
        `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.image-container > a > img`,
        (el) => el.src,
      )

      if (productsCount === 15) {
        await page.screenshot({ path: './page.png', fullPage: true })
      }

      data[productsCount - 1].name = await page.$eval(
        `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > h3 > a`,
        (el) => el.innerText,
      )

      const textPrice = await page.$eval(
        `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > strong > span`,
        (el) => el.innerText,
      )
      data[productsCount - 1].price = +textPrice.substring(2)

      const colorsCount = await page.$eval(
        `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > ul`,
        (el) => el.childElementCount,
      )
      let colors = []

      for (let colorCount = 1; colorCount <= colorsCount; colorCount++) {
        const color = await page.$eval(
          `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > ul > li:nth-child(${colorCount.toString()}) > a`,
          (el) => el.style.backgroundColor,
        )
        colors.push(color)
      }
      data[productsCount - 1].colors = colors

      //ProductPage
      let link = await page.$eval(
        `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productsCountStr}) > article > div.image-container > a`,
        (el) => el.href,
      )

      await to(link)

      console.log(link)

      let showcaseCount = await page.$eval(
        `#main-content > div.product.parbase > div.layout.pdp-wrapper.product-detail.sticky-footer-wrapper.js-reviews > div.module.product-description.sticky-wrapper > div.sub-content.product-detail-info.product-detail-meta.inner.sticky-on-scroll.semi-sticky > div > div.product-colors.miniatures.clearfix.slider-completed.loaded > div > ul > li > ul`,
        (el) => el.childElementCount,
      )

      const colorLink = await page.$$eval('.filter-option', (a) =>
        a.map(({ href }) => href),
      )

      showcaseItems = []
      for (
        let showcaseItemCount = 0;
        showcaseItemCount < showcaseCount;
        showcaseItemCount++
      ) {
        let productId = colorLink[showcaseItemCount].match(/\d{2,}/)
        const showcaseItem = await page.$eval(
          `#filter-colour-${productId} > img`,
          (el) => el.src,
        )
        showcaseItems.push(showcaseItem)
      }
      data[productsCount - 1].showCase = showcaseItems

      await page.click('#picker-1 > button')

      await to(initLink)
      await page.click(
        '#page-content > div > div:nth-child(3) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label',
      )

      console.log(`${productsCount}/${totalProducts}`)
    }
    fs.writeFileSync('data.JSON', JSON.stringify(data))
  })()

  // await page.screenshot({ path: './page.png', fullPage: true })

  await browser.close()
})()
