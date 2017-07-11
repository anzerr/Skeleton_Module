"use strict";

module.exports = function($) {
    return $.require([
        //
    ], function(
        //
    ) {

        var obj = function() {};
        obj.prototype = {
            health: function() {
                var p = new $.promise(), start = $.time.now().get;

                setTimeout(function() {
                    p.resolve({
                        eventLoop: {value: $.time.now().get - start, unit: 'ms'},
                        memory: process.memoryUsage()
                    });
                }, 1);

                return (p);
            }
        };

        return ({'static private': obj});
    });
};
