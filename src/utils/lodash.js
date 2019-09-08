const _ = require('lodash');

module.exports = {
    findDistrictByName: function (obj, keysearch) {
        return _.filter(obj, keysearch);
    },
    findDistrictByID: function (obj, keysearch) {
        return _.filter(obj, prop => {
            if (prop.districtId == keysearch) {
                return prop;
            }
        });
    },
    getArrayOfElements(obj, option) {
        return _.map(obj, option);
    },
    sortCustomers: function (obj) {
        return _.sortBy(obj);
    }
}
