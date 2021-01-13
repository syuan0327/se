const ok = require('assert').ok

const puppeteer = require('puppeteer');
var browser, page

const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000
};

describe('myblog', function() {
  before (async function () {
    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.goto('https://se109-d25e7.web.app')
  });
  after(function() {
    browser.close();
  });
 

  describe('puppeteer', function() {
    it('GET / should see <button id="new">新增貼文</button>', async function() {
      await page.goto('https://se109-d25e7.web.app', {waitUntil: 'domcontentloaded'})
      let html = await page.content()
      ok(html.indexOf('<button id="new">新增貼文</button>') >= 0)
    })
    it('click 新增貼文 button', async function() {
      await page.click('#new')
      await page.goto('https://se109-d25e7.web.app/new.html', {waitUntil: 'domcontentloaded'})
      let html = await page.content()
      ok(html.indexOf('<h1>新增貼文</h1>') >= 0)
    })
    it('fill {title:"aaa", content:"aaa"}', async function() {
      await page.focus('#title')
      await page.keyboard.type('ccc')
      await page.focus('#content')
      await page.keyboard.type('ccc')
      await page.click('#send')
    })
    it('press enter', async function() {
      await page.keyboard.press('\r');
    })
    it('should see the post we just do', async function() {
      await page.goto('https://se109-d25e7.web.app', {waitUntil: 'load'})
      let html = await page.content()
      ok(html.indexOf('ccc') >= 0)
    })
  })
})
