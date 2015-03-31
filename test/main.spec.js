'use strict';

import React from 'react';
import Feed from '../build/js/components/Feed';
import TestUtils from 'react/lib/ReactTestUtils';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';


var FeedFactory = React.createFactory(Feed);

describe('Feed suite', function () {
	var mount;
	var renderedComponent;
	var component, ulComponent;
	var promise1;
	beforeEach(function () {
		chai.use(chaiAsPromised);
		component = FeedFactory({
			many: 5
		});
		mount = document.getElementsByTagName('body')[0];
		renderedComponent = React.render(component, mount);
		ulComponent = TestUtils.findRenderedDOMComponentWithTag(
			renderedComponent,
			'ul'
		);
	})
	it('should be defined', function () {
		expect(Feed).to.be.defined;
	});
	it('should have 5 items at load time', function (done) {
		expect(promise1.props.children.length).to.equal(5).notify(done);
	});
});
