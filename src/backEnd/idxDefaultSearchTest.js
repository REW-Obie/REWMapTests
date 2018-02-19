import {Selector} from 'testcafe';

/**
 * Test URLs
 * Unable to find a broken site on REWCRM
 */

const siteUrlFixed = 'http://www.advantagerealestate.com';

/**
 * DOM Elements
 * Covers only REWCRM for now
 */

const loginButton = Selector('.btn');
const loginField = Selector('input[name="username"]');
const defaultSearch = Selector('a[href="/backend/idx/default-search/"]');
const mapContainer = Selector('#idx-builder-map');

fixture `IDX Default Search - Backend`
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