import {Selector} from 'testcafe';
import {getMapButton} from '../utils';

const siteUrlBroken = 'http://www.losangelesrealestate.com';
const siteUrlFixed = 'http://www.advantagerealestate.com';
const siteUrlElite = 'http://www.murfreesborosmls.com/';

fixture `IDX Page`
    .page `${siteUrlFixed}`;

test('Navigate to IDX page', async t => {
    const bodyTag = await Selector('body')();
    const mapButton = getMapButton(bodyTag);
    const mapContainer = Selector('#listings-map')();
    await t
        .navigateTo('/idx/')
        // .click(getMapButton(bodyTag)) // TODO: Check if map is already open
        .expect(mapContainer.childElementCount).gt(0, 'Shows a map')
});