"use strict";

module.exports = function($) {
    return $.require([
        'import!respond'
    ], function(
        respond
    ) {

        var obj = function() {};
        obj.prototype = $.extends('!controller', {
            is: function(data) {
                var key = data.authorization || data.headers.authorization;
				console.log(data, key);
                if (key == 'password') {
                    return (true);
                }
                //return $.promise().reject(this.res().status(400).data('A100'));
                // or
                return $.promise().reject(respond.code('A100'));
            }
        });

        return ({'static private': obj});
    });
};
