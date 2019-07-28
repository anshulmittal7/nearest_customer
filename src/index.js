'use strict';
var customer_finder=require('./customerFinderService/customer_finder')
/**
 * Adds commas to a number
 * @param {number} latitude     // longitude for Dublin
 * @param {number} longitude    // longitude for Dublin
 * @param {number} range        //in kms, range for customers to search for
 * @return {string}
 */
module.exports = function(latitude,longitude,range) {
    //Setting Coordinates for dublin
    var result = customer_finder.getNearestCustomers(latitude,longitude,range);
    console.log(result);
    return result;
};
