/* jshint -W030 */
'use strict';

import React from 'react';
import Feed from '../build/js/components/Feed';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import jsdom from 'jsdom';

describe('Feed suite', function() {
	it('should be defined', function() {
		expect(Feed).to.be.defined;
    });
	xit('should have 5 items at load time', function () {
		//expect(Feed)
	})
	it('should have 10 items at scroll time', function(){
		 // scroll the window
		//var node = React.findDOMNode(this.refs.Feed);
		console.log(this.refs.Feed)
		ReactTestUtils.Simulate.scroll(Feed, 400);
	})
});
