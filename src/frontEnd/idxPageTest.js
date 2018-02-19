import {Selector} from 'testcafe';
import {getMapButton} from '../utils';

/**
 * Test URLs
 */

const siteUrlBroken = 'http://www.losangelesrealestate.com';
const siteUrlFixed = 'http://www.advantagerealestate.com';
const siteUrlElite = 'http://www.murfreesborosmls.com/';
const siteUrlPt1r = 'http://www.aprilblue.com/';
const siteUrlLec2015 = 'https://www.aare.org/';

fixture `IDX Page Map`
    .page `${siteUrlFixed}`;

test('Navigate to IDX page', async t => {
    const bodyTag = await Selector('body')();
    const isElite = bodyTag.hasClass('elite');
    const mapButton = getMapButton(bodyTag);
    const mapContainer = isElite ? Selector('.fw-idx-map') : Selector('#listings-map');
    await t
        .navigateTo('/idx/')
        .click(mapButton)
        .expect(mapContainer.childElementCount).gt(0, 'Has a map');
});