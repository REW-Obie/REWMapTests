import {Selector} from 'testcafe';

const siteUrlBroken = 'http://www.losangelesrealestate.com';
const siteUrlFixed = 'http://www.advantagerealestate.com';
const siteUrlElite = 'http://www.murfreesborosmls.com/';

const loginButton = Selector('.btn');
const loginField = Selector('input[name="username"]');
const defaultSearch = Selector('a[href="/backend/idx/default-search/"]');
const mapContainer = Selector('#idx-builder-map');

fixture `IDX Page`
    .page `${siteUrlFixed}`;

test('Backend default search has a map', async t => {
    await t
        .navigateTo('/backend/')
        .typeText(loginField, 'admin')
        .click(loginButton)
        .navigateTo('idx/')
        .click(defaultSearch)
        .expect(mapContainer.childElementCount).gt(0, 'Shows a map')
});