const puppeteer = require('puppeteer');

(async () => {
    const ana_selector = '#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div > div > div > div.freebirdFormviewerComponentsQuestionRadioRoot > div > div > span > div > div:nth-child(1) > label > div.docssharedWizToggleLabeledLabelWrapper.exportLabelWrapper > div.docssharedWizToggleLabeledContent > div > span';
    const button_selector = '#mG61Hd > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div > div > div > span';
    const refresh_selector = 'body > div.freebirdFormviewerViewFormContentWrapper > div:nth-child(2) > div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewResponseLinksContainer > a';
    const click_options = {button: 'left', delay: 200}
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSeYh3YIOSh9DOYI3NulKrmKNjiG80Qss7PjT54OZdBY7Xx8rg/viewform');
    
    while(1) {
        await page.waitForSelector(ana_selector);
        await page.click(ana_selector,click_options);
        await page.click(button_selector, click_options);
        await page.waitForSelector(refresh_selector);
        await page.click(refresh_selector, click_options);
    }
    await browser.close();
})();

