import { browser, element, by, ElementFinder } from 'protractor';

describe('Example E2E Test', () => {

    beforeEach(() => {
        browser.get('');
    });

    it('the home tab is displayed by default', () => {
        expect(element(by.css('.toolbar-title'))
            .getAttribute('innerHTML'))
            .toContain('Pages');
    });
});