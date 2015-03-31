/* jshint -W030 */
'use strict';

import React from 'react';
import Feed from '../build/js/components/Feed';
import TestUtils from 'react/lib/ReactTestUtils';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';


var FeedFactory = React.createFactory(Feed);

describe('Feed suite', function () {
	var renderTarget;
	var renderedComponent;
	var component, rComponent;
	var promise1;
	beforeEach(function () {
		chai.use(chaiAsPromised);
		component = FeedFactory({
			many: 5
		});
		renderTarget = document.getElementsByTagName('body')[0];
		renderedComponent = React.render(component, renderTarget);

		document.ready = new Promise(function (resolve) {
			if (document.readyState === 'complete') {
				resolve();
			} else {
				function onReady() {
					resolve();
					document.removeEventListener('DOMContentLoaded', onReady, true);
					window.removeEventListener('load', onReady, true);
				}

				document.addEventListener('DOMContentLoaded', onReady, true);
				window.addEventListener('load', onReady, true);
			}
		});
		//
		promise1 = document.ready.then(function(){
			console.log("ready!!");
			rComponent = TestUtils.findRenderedDOMComponentWithTag(
				renderedComponent,
				'ul'
			);
			return rComponent;
		});
	})
	it('should be defined', function () {
		expect(Feed).to.be.defined;
	});
	it('should have 5 items at load time', function (done) {
		console.log(promise1)
		expect(promise1.props.children.length).to.equal(5);

		//expect(rComponent.props.children.length).to.equal(15);
	})
	it('should have 10 items at scroll time', function () {
		// scroll the window
		//var node = React.findDOMNode(this.refs.Feed);
		//ReactTestUtils.Simulate.scroll(Feed, 400);
	})
});
