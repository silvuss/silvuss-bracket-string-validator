/**
 * @module
 * @file A module for the "counter" validation algorithm.
 * @requires ValbrstrException
 */

const ValbrstrException = require("../../common/testable/valbrstr-exception");

/**
 * @exports
 * Validate a bracket string using the "counter" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  Must be of the length one
 * @param {string} rightBracketCharacter
 *  Must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
function isBracketStringValidCounter(
    bracketString,
    leftBracketCharacter = "(",
    rightBracketCharacter = ")"
) {
    if ((!bracketString && bracketString !== "")
        || !bracketString.substring) {
        // The argument is not a string
        throw new ValbrstrException(`The bracket string must be a string, but now is: ${bracketString}`);
    }

    if (!leftBracketCharacter ||
        !leftBracketCharacter.substring) {
        throw new ValbrstrException(`The left bracket character must be a string, but now is: ${leftBracketCharacter}`);
    }

    if (leftBracketCharacter.length !== 1) {
        throw new ValbrstrException(`The left bracket character must be one-character long, but now is: ${leftBracketCharacter.length}`);
    }

    if (!rightBracketCharacter ||
        !rightBracketCharacter.substring) {
        throw new ValbrstrException(`The right bracket character must be a string, but now is: ${rightBracketCharacter}`);
    }

    if (rightBracketCharacter.length !== 1) {
        throw new ValbrstrException(`The right bracket character must be one-character long, but now is: ${rightBracketCharacter.length}`);
    }

    let counter = 0;

    for (let i = 0; i < bracketString.length; ++i) {
        if (bracketString[i] === leftBracketCharacter) {
            ++counter;
        } else if (bracketString[i] === rightBracketCharacter) {
            --counter;

            if (counter < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    if (counter === 0) {
        return true;
    } else {
        return false;
    }
}

exports.isBracketStringValidCounter = isBracketStringValidCounter;