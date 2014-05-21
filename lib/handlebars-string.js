var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("string-concat", function(){
        var args = w.arrayify(arguments).slice(0, -1);
        return w.arrayify(args).reduce(function(prev, curr){
            return prev.concat(curr);
        }, "");
    });
};
