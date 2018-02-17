import {Selector} from 'testcafe';

const listingSelectors = {
    bcse: '.listings .brewImage',
    elite: '.uk-grid .idx-background-image-link',
    fese: '.listings .action-detail',
    Enterprise: '.listings .article__photo'
};

const mapButtonSelectors = {
    bcse: '.view',
    elite: '#view-map',
    fese: '.view-map',
    Enterprise: '.view-map'
};

export function getListingSelector(body) {
    for (let prop in listingSelectors) {
        if (body.attributes.class.includes(prop)) {
            return listingSelectors[prop];
        }
    }
}

export function getMapContainer(body) {
    if (body.attributes.class.includes('elite')) {
        return Selector('.fw-idx-map')();
    } else {
        return Selector('#map_canvas')();
    }
}

export function getMapButton(body) {
    if (body.attributes.class.includes('elite')) {
        return Selector('#view-map')(); // TODO: Figure out why this button isn't being found
    } else {
        return Selector('[href="#map"]')();
    }
}