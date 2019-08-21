/**
 * @fileoverview Notify when an id for localization is not specified
 * @author Dustin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-missing-localization-id"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-missing-localization-id", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "Localized text must use an existing id",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
