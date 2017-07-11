"use strict";

module.exports = function() {
	return ([
		{
			method: ['get'],
			path: '/health',
			action: {
				controller: 'info',
				method: 'health'
			}
		},
		{
			method: ['get'],
			path: '/cdn/:file', // other way to serve files
			param: {
				file: '.*'
			},
			action: {
				controller: 'info',
				method: 'getFile'
			}
		}
	]);
};
