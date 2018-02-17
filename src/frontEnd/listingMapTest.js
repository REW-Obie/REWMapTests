import {Selector, ClientFunction} from 'testcafe';
import {getListingSelector, getMapContainer} from '../utils';

const siteUrlBroken = 'http://www.losangelesrealestate.com';
const siteUrlFixed = 'http://www.advantagerealestate.com';
const siteUrlElite = 'http://elite.rewsites.com/';

fixture `Listing Map`
    .page `${siteUrlFixed}`;

test('Navigate to listing map', async t => {
    const bodyTag = await Selector('body')();
    const mapCanvas = getMapContainer(bodyTag);
    await t
        .navigateTo('/idx/')
        .click(getListingSelector(bodyTag))
        .navigateTo('map/')
        .expect(mapCanvas.childElementCount).gt(0, 'Has a map')
});