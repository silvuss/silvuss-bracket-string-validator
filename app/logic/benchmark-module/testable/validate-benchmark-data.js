/**
 * @module
 * @file A module for validating benchmark data.
 */

// Import a helper
const TypeChecker = require("../../common/testable/type-checker");

/**
 * @exports
 * Validate benchmark data.
 * @param {any} dataToValidate
 *  Any JavaScript value
 * @returns {boolean}
 *  If the data are valid benchmark data, `true`;
 *  otherwise, `false`
 */
function validateBenchmarkData(dataToValidate) {
    if (!Array.isArray(dataToValidate)) {
        return false;
    }

    // Now we are sure that the data to validate are an array
    //  (but still – is it of the Array type?)

    return dataToValidate.every(x => {
        return Array.isArray(x)
            && x.every(y => TypeChecker.isString(y, true));
    });
}

exports.validateBenchmarkData = validateBenchmarkData;