var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("string-concat", function(){
        return w.arrayify(arguments).reduce(function(prev, curr){
            return prev.concat(curr);
        }, "");
    });
};
