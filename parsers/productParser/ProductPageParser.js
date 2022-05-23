const puppeteer = require('puppeteer')
const fs = require('fs')
// const to = require('../../utils/to')

const subCategoiesIds = {
  'https://www2.hm.com/en_us/women/products/shirts-blouses.html': 1,
  'https://www2.hm.com/en_us/women/products/pants.html': 2,
  'https://www2.hm.com/en_us/women/products/blazers-vests.html': 3,
  'https://www2.hm.com/en_us/women/products/jeans.html': 4,
  'https://www2.hm.com/en_us/women/products/shorts.html': 5,
  'https://www2.hm.com/en_us/women/products/jumpsuits-rompers.html': 6,
  'https://www2.hm.com/en_us/women/products/skirts.html': 7,
  'https://www2.hm.com/en_us/women/products/shoes.html': 8,
  'https://www2.hm.com/en_us/women/products/accessories.html': 9,
  'https://www2.hm.com/en_us/women/products/swimwear.html': 10,
  'https://www2.hm.com/en_us/women/products/cardigans-sweaters.html': 11,
  'https://www2.hm.com/en_us/women/products/hoodies-sweatshirts.html': 12,
  'https://www2.hm.com/en_us/women/products/lingerie.html': 13,
  'https://www2.hm.com/en_us/women/products/loungewear.html': 14,
  'https://www2.hm.com/en_us/women/products/sleepwear.html': 15,
  'https://www2.hm.com/en_us/women/products/socks-tights.html': 16,
  'https://www2.hm.com/en_us/women/products/workout-clothes.html': 17,
  'https://www2.hm.com/en_us/men/products/t-shirts-tank-tops.html': 18,
  'https://www2.hm.com/en_us/men/products/pants.html': 19,
  'https://www2.hm.com/en_us/men/products/shirts.html': 20,
  'https://www2.hm.com/en_us/men/products/shorts.html': 21,
  'https://www2.hm.com/en_us/men/products/hoodies-sweatshirts.html': 22,
  'https://www2.hm.com/en_us/men/products/suits-blazers.html': 23,
  'https://www2.hm.com/en_us/men/products/jackets-coats.html': 24,
  'https://www2.hm.com/en_us/men/products/jeans.html': 25,
  'https://www2.hm.com/en_us/men/products/accessories.html': 26,
  'https://www2.hm.com/en_us/men/products/shoes.html': 27,
  'https://www2.hm.com/en_us/men/products/cardigans-sweaters.html': 28,
  'https://www2.hm.com/en_us/men/products/swim-wear-trunks.html': 29,
  'https://www2.hm.com/en_us/men/products/sportswear.html': 30,
  'https://www2.hm.com/en_us/men/products/underwear.html': 31,
  'https://www2.hm.com/en_us/men/products/basics.html': 32,
}

;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT; Win 64; x64; rv:73.0) Gecko/20100101 Firefox/73.0',
  )
  let data = []
  await page.setViewport({ width: 1920, height: 1080 })

  const to = async (link, time = 2500) => {
    await page.goto(link)
    await page.waitForTimeout(time)
  }

  const initLink =
    'https://www2.hm.com/en_us/women/products/cardigans-sweaters.html'

  await to(initLink)

  await (async () => {
    const totalProducts = await page.evaluate(
      () => document.querySelectorAll('.product-item').length,
    )

    await page.click(
      '#page-content > div > div:nth-child(4) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label',
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
        `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.image-container > a > img`,
        (el) => el.src,
      )

      data[productsCount - 1].name = await page.$eval(
        `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > h3 > a`,
        (el) => el.innerText,
      )

      // const textPrice = await page.$eval(
      //   `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > strong > span`,
      //   (el) => el.innerText,
      // )
      // data[productsCount - 1].price = +textPrice.substring(2)

      data[productsCount - 1].price = Math.floor(Math.random() * 100)

      const colorsCount = await page.$eval(
        `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > ul`,
        (el) => el.childElementCount,
      )
      let colors = []

      for (let colorCount = 1; colorCount <= colorsCount; colorCount++) {
        const color = await page.$eval(
          `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.item-details > ul > li:nth-child(${colorCount.toString()}) > a`,
          (el) => el.style.backgroundColor,
        )
        colors.push(color)
      }
      data[productsCount - 1].colors = colors

      //ProductPage
      let link = await page.$eval(
        `#page-content > div > div:nth-child(4) > ul > li:nth-child(${productsCountStr}) > article > div.image-container > a`,
        (el) => el.href,
      )

      await to(link, 5000)

      let showcaseCount = await page.$eval(
        `.group`,
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
        let imgs = []
        showcaseItems[showcaseItemCount] = {}

        await page.click(`#filter-colour-${productId} > img`)
        await page.waitForTimeout(3000)

        imgs.push(
          await page.$eval(
            '#main-content > div.product.parbase > div.layout.pdp-wrapper.product-detail.sticky-footer-wrapper.js-reviews > div.module.product-description.sticky-wrapper > figure.pdp-image.product-detail-images.product-detail-main-image > div > img',
            (el) => el.src,
          ),
        )

        let secondImgs = await page.$$eval(
          '.product-detail-thumbnail-image',
          (img) => img.map(({ src }) => src),
        )

        imgs.push(...imgs, ...secondImgs)

        let showcaseMiniImg = await page.$eval(
          `#filter-colour-${productId} > img`,
          (el) => el.src,
        )

        showcaseItems[showcaseItemCount].miniImg = showcaseMiniImg
        showcaseItems[showcaseItemCount].imgs = imgs
      }
      data[productsCount - 1].showCase = showcaseItems

      // avaliable sizes, mb leater {
      // await page.click('#picker-1 > button')

      // const sizesCount = await page.evaluate(
      //   () => document.querySelector('.picker-list').childElementCount,
      // )

      // console.log(sizesCount)

      // #picker-1 > ul > li:nth-child(2) > div > button > span
      // }

      //back to productListPage

      await to(initLink)
      await page.screenshot({ path: 'page.png', fullPage: true })
      await page.click(
        '#page-content > div > div:nth-child(4) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label',
      )

      console.log(`${productsCount}/${totalProducts}`)
    }
    // Convert obj in sql querys

    console.log(data)

    let logger = fs.createWriteStream('data.sql', { flags: 'a' })

    // logger.write(`CREATE TABLE products(
    //   id SERIAL,
    //   img VARCHAR ,
    //   name VARCHAR ,
    //   price NUMERIC ,
    //   colors TEXT[],
    //   showCase json,
    //   views NUMERIC
    // );\n`)

    data.forEach((product) => {
      logger.write(
        `INSERT INTO products ("categoryId", "subCategoryId", img, name, price, colors, showCase) VALUES (1, 11, '${
          product.img
        }','${product.name}',${product.price},'{"${product.colors.join(
          '","',
        )}"}','${JSON.stringify(product.showCase)}',);\n`,
      )
    })
  })()
  await browser.close()
})()
