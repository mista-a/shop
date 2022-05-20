const puppeteer = require('puppeteer')
const fs = require('fs')
const to = require('../utils/to')

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
      'body > header > nav > ul.menu__primary > li:nth-child(2) > a > span',
    )
    await page.screenshot({ path: 'page.png', fullPage: true })
    const totalCategoris = await page.evaluate(() => {
      return (
        Array.from(
          document.querySelector(
            'body > header > nav > ul.menu__primary > li.menu__super.menu__super--has-sub.js-traverse-trigger.menu__super--open > ul > li.menu__block.menu--unfolded > ul',
          ).children,
        ).length - 27
      )
    })

    for (
      let categorisCount = 3;
      categorisCount <= totalCategoris - 5;
      categorisCount++
    ) {
      data.push({})
    }
  })()
  await browser.close()
})()
