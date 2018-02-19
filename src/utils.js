import {Selector} from 'testcafe';

const listingSelectors = {
    bcse: '.listings .brewImage',
    elite: '.uk-grid .idx-background-image-link',
    fese: '.listings .action-detail',
    Enterprise: '.listings .article__photo',
    'pt-1r': '.listings .brewImage',
    'lec-2015': '.photo .info-links'
};

/**
 * @param {object} body - The body tag
 * @returns {string} Selector for first listing
 */

export function getListingSelector(body) {
    for (let prop in listingSelectors) {
        if (body.attributes.class.includes(prop)) {
            return listingSelectors[prop];
        }
    }
}

/**
 * @param {object} body - The body tag
 * @returns {string} Selector for the map container
 */

export function getMapContainer(body) {
    if (body.attributes.class.includes('elite')) {
        return Selector('.fw-idx-map')();
    } else {
        return Selector('#map_canvas')();
    }
}

/**
 * @param {object} body - The body tag
 * @returns {string} Selector for "map" button
 */

export function getMapButton(body) {
    if (body.attributes.class.includes('elite')) {
        return Selector('.toolbar #view-map')();
    } else {
        return Selector('[href="#map"]')();
    }
}