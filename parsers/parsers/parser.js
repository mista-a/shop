const puppeteer = require('puppeteer')
const fs = require('fs')
const to = require('../utils/to')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT; Win 64; x64; rv:73.0) Gecko/20100101 Firefox/73.0'
  )
  await page.setViewport({ width: 1920, height: 1080 })
  const initLink = 'https://www2.hm.com/en_us/index.html'

  await page.goto(initLink)

  subCategoiesIds = {
    Dresses: 1,
    Tops: 2,
    Basics: 3,
    'Shirts & Blouses': 4,
    Pants: 5,
    Blazers: 6,
    Jeans: 7,
    Shorts: 8,
    'Overalls & Jumpsuits': 9,
    Skirts: 10,
    Shoes: 11,
    Accessories: 12,
    'Swimwear & Beachwear': 13,
    'Cardigans & Sweaters': 14,
    'Jackets & Coats': 15,
    'Hoodies & Sweatshirts': 16,
    Lingerie: 17,
    Loungewear: 18,
    Sleepwear: 19,
    'Socks & Tights': 20,
    Activewear: 21,
    'T-shirts & Tanks': 22,
    Shirts: 23,
    'Suits & Blazers': 24,
    Underwear: 25,
    Basics: 26,
    'Sleepwear & Loungewear': 27,
  }

  data = {}

  await (async () => {
    await page.hover(
      'body > header > nav > ul.menu__primary > li:nth-child(2) > a > span'
    )
    for (let categoryCount = 2; categoryCount < 2 + 2; categoryCount++) {
      console.log(categoryCount)
      let category = await page.$eval(
        `body > header > nav > ul.menu__primary > li:nth-child(${categoryCount}) > a > span`,
        (el) => el.innerText
      )
      if (category === 'Divided') continue
      const totalCategories = await page.evaluate(() => {
        return Array.from(
          document.querySelector(
            'body > header > nav > ul.menu__primary > li.menu__super.menu__super--has-sub.js-traverse-trigger.menu__super--open > ul > li.menu__block.menu--unfolded > ul'
          ).children
        ).length
      })
      await (async () => {
        for (
          let subCategoryCount = 3;
          subCategoryCount < totalCategories - 4;
          subCategoryCount++
        ) {
          let subCategory = await page.$eval(
            `body > header > nav > ul.menu__primary > li:nth-child(${categoryCount}) > ul > li.menu__block.menu--unfolded > ul > li:nth-child(${subCategoryCount}) > a`,
            (el) => el.innerText
          )
          data[subCategory] = subCategoryCount - 2
        }
      })()
      console.log(data)
    }
  })()
  await browser.close()
})()
