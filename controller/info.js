"use strict";

module.exports = function($) {
	return $.require([
		'module!entity/info.js',
		'module!entity/util.js',
		'import!respond'
	], function(
		info,
		util,
		respond
	) {

		var obj = function() {};
		obj.prototype = $.extends('!controller', {
			health: $.midware([util, 'is'], function() {
				return (respond.run(info.health()));
			}),

			getFile: function(data) {
				const path = $.path('module!/public/' + data.url.substr(11, data.url.length - 11));
				return (this.file({contentDisposition: 'inline', path: path}));
			}
		});

		return ({'static private': obj});
	});
};
