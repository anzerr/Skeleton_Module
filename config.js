"use strict";

module.exports = function() {
	return ({
		dependencies: {},
		route: [
			'config/info.js'
		],
		cdn: [ // normal way to serve up files
            {
                path: '/public/',
                priority: 1,
                source: 'public'
            }
		],
		import: [
			{
				module: 'generic',
				as: 'respond',
				path: '/entity/respond.js'
			}
		]
	});
};
