var a = require("array-ting"),
    s = require("string-ting");

module.exports = function(handlebars){
    handlebars.registerHelper("string-concat", function(){
        var args = a.arrayify(arguments).slice(0, -1);
        return args.join("");
    });

    handlebars.registerHelper("string-replace", function(input, find, replace){
        if (!input) return "";
        return input.replace(find, replace);
    });

    handlebars.registerHelper("string-padRight", function(input, width, padWith){
        if (!input) return "";
        if (typeof padWith === "object") padWith = undefined;
        if (input) return s.padRight(input, width, padWith);
    });

    handlebars.registerHelper("string-clipLeft", function(input, width, prefix){
        if (!input) return "";
        if (typeof prefix === "object") prefix = undefined;
        return s.clipLeft(input, width, prefix);
    });
};
