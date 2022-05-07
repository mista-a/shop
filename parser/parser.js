const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT; Win 64; x64; rv:73.0) Gecko/20100101 Firefox/73.0'
  )
  const initLink = 'https://www2.hm.com/en_us/men/new-arrivals/clothes.html'

  await page.goto(initLink)
  await page.click(
    '#page-content > div > div:nth-child(3) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label'
  )

  const data = []
  const productCount = await page.evaluate(
    () => document.querySelectorAll('.product-item').length
  )

  for (let i = 1; i <= productCount; i++) {
    data[i] = {}
  }

  for (let i = 1; i <= productCount; i++) {
    let link = await page.$eval(
      `#page-content > div > div:nth-child(3) > ul > li:nth-child(${i.toString()}) > article > div.image-container > a`,
      (el) => el.href
    )

    await page.goto(link)
    await page.waitForTimeout(3000)

    console.log(link)

    let showcaseCount = await page.$eval(
      `#main-content > div.product.parbase > div.layout.pdp-wrapper.product-detail.sticky-footer-wrapper.js-reviews > div.module.product-description.sticky-wrapper > div.sub-content.product-detail-info.product-detail-meta.inner.sticky-on-scroll.semi-sticky > div > div.product-colors.miniatures.clearfix.slider-completed.loaded > div > ul > li > ul`,
      (el) => el.childElementCount
    )

    await page.goto(initLink)
    await page.waitForTimeout(3000)

    // showcaseItems = []
    // for (
    //   let showcaseItemCount = 0;
    //   showcaseItemCount < showcaseCount;
    //   showcaseItemCount++
    // ) {
    //   const showcaseItem = await page.$eval(
    //     `#filter-colour-1036745006`,
    //     (el) => el.href
    //   )
    //   showcaseItems.push(showcaseItem)
    // }
    // data[i].showCase = showcaseItems
  }

  // await page.goto(initLink)

  // for (let i = 1; i <= productCount; i++) {
  //   data[i].img = await page.$eval(
  //     `#page-content > div > div:nth-child(3) > ul > li:nth-child(${i.toString()}) > article > div.image-container > a > img`,
  //     (el) => el.src
  //   )
  // }

  // for (let i = 1; i <= productCount; i++) {
  //   data[i].name = await page.$eval(
  //     `#page-content > div > div:nth-child(3) > ul > li:nth-child(${i.toString()}) > article > div.item-details > h3 > a`,
  //     (el) => el.innerText
  //   )
  // }

  // for (let i = 1; i <= productCount; i++) {
  //   const textPrice = await page.$eval(
  //     `#page-content > div > div:nth-child(3) > ul > li:nth-child(${i}) > article > div.item-details > strong > span`,
  //     (el) => el.innerText
  //   )
  //   data[i].price = +textPrice.substring(2)
  // }

  // for (let productCount = 1; productCount <= data.length - 1; productCount++) {
  //   const colorsCount = await page.$eval(
  //     `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productCount.toString()}) > article > div.item-details > ul`,
  //     (el) => el.childElementCount
  //   )
  //   let colors = []

  //   for (let colorCount = 1; colorCount <= colorsCount; colorCount++) {
  //     const color = await page.$eval(
  //       `#page-content > div > div:nth-child(3) > ul > li:nth-child(${productCount.toString()}) > article > div.item-details > ul > li:nth-child(${colorCount.toString()}) > a`,
  //       (el) => el.style.backgroundColor
  //     )
  //     colors.push(color)
  //   }
  //   data[productCount].colors = colors
  // }

  // console.log(data)

  // await page.screenshot({ path: 'a.png', fullPage: true })

  await browser.close()
})()
