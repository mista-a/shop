const puppeteer = require('puppeteer')
const fs = require('fs')
const to = require('../../utils/to')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT; Win 64; x64; rv:73.0) Gecko/20100101 Firefox/73.0',
  )
  await page.setViewport({ width: 1920, height: 1080 })
  const initLink = 'https://www2.hm.com/en_us/index.html'

  await page.goto(initLink)

  await (async () => {
    await page.hover(
      'body > div:nth-child(40) > header > nav > ul.menu__primary > li:nth-child(2)',
    )
    await page.screenshot({ path: 'page.png', fullPage: true })
    const totalCategoris = await page.evaluate(() => {
      return Array.from(
        document.querySelector(
          'body > div:nth-child(40) > header > nav > ul.menu__primary > li.menu__super.menu__super--has-sub.js-traverse-trigger.menu__super--open > ul > li.menu__block.menu--unfolded > ul',
        ).children,
      ).length
    })
    console.log(totalCategoris)

    // const data = []
    // for (
    //   let productsCount = 1;
    //   productsCount <= totalProducts;
    //   productsCount++
    // ) {
    //   data.push({})
    //   await to(initLink)
    //   await page.click(
    //     '#page-content > div > div:nth-child(3) > div.products-filter-container > div.products-filter.sticky-on-scroll > form > fieldset.filter-toggleimages.js-filter-toggleimages > ul > li:nth-child(2) > label',
    //   )
    //   console.log(`${productsCount}/${totalProducts}`)
    // }
    // //Convert obj in sql querys
    // // console.log(data)
    // let logger = fs.createWriteStream('categoryData.sql')
    // logger.write(`CREATE TABLE products(
    //   id SERIAL,
    //   img VARCHAR ,
    //   name VARCHAR ,
    //   price NUMERIC ,
    //   colors TEXT[],
    //   showCase json,
    //   views NUMERIC
    // );\n`)
    // data.forEach((product) => {
    //   logger.write(
    //     `INSERT INTO products (img, name, price, colors, showCase) VALUES ('${
    //       product.img
    //     }','${product.name}',${product.price},'{"${product.colors.join(
    //       '","',
    //     )}"}','${JSON.stringify(product.showCase)}',);\n`,
    //   )
    // })
  })()
  await browser.close()
})()
