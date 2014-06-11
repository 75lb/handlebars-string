var a = require("array-ting");

module.exports = function(handlebars){
    handlebars.registerHelper("string-concat", function(){
        var args = a.arrayify(arguments).slice(0, -1);
        return args.join("");
    });

    handlebars.registerHelper("string-replace", function(input, find, replace){
        return input.replace(find, replace);
    });
};
