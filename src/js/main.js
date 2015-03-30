'use strict';

import React from 'react';
import Feed from './components/Feed';

//var scrollBottom = false;

$(window).on('scroll', function () {
	let limit = 25;
	let scrollButtom = $(window).scrollTop() + $(window).height() === $(document).height();
	if (scrollButtom) {
		limit += 5;
		let l = limit.toString();
		React.render(<Feed many={l}/>, document.getElementById('mount'));
	}
	//if(scrollButtom)
	console.log(scrollButtom, limit);
});

React.render(<Feed many="25"/>, document.getElementById('mount'));