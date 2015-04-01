import React from 'react';
import FeedList from './FeedList';

import $ from 'jquery';
import _ from 'lodash';

const url = "http://www.reddit.com/rising.json";

var Feed = React.createClass({
	getInitialState: function () {
		return {
			items: [],
			many: this.props.many,
			after: "",
			before: ""
		};
	},
	fetchJSON: function (direction) {
		let limit = `?limit=${this.state.many}`;
		//let count = `?count=${this.state.items.length}`;
		if (direction === 'after') {
			let after = this.state.after === "" ? "" : `&after=${this.state.after}`;
			$.getJSON(url + limit + after)
				.done(function (e) {
					if (this.isMounted()) {
						let joined;
						if (this.state.items.length >= 25) {
							joined = _.drop(this.state.items, 5).concat(e.data.children);
						} else {
							joined = this.state.items.concat(e.data.children);
						}
						this.setState({
							items: joined,
							after: e.data.after
						});
					}
				}.bind(this));
		} else {
			let before = this.state.before == null ? "" : `&before=${this.state.before}`;
			$.getJSON(url + limit + before)
				.done(function (e) {
					if (this.isMounted()) {
						let joined = e.data.children.concat(this.state.items);
						this.setState({
							items: joined,
							before: e.data.after
						});
					}
				}.bind(this));
		}
	},
	handleScroll: function () {
		console.log(this.state.items.length)
		if ($(window).scrollTop() + $(window).height() === $(document).height()) {
			this.fetchJSON('after');
		} else if ($(window).scrollTop() - $(window).height() === -$(window).height()) {
			this.fetchJSON('before');
		}
	},
	componentDidMount: function () {
		$(window).on('scroll', this.handleScroll);
		this.fetchJSON(this.props.many);
	},
	render: function () {
		return (
			<FeedList items={this.state.items} />
		);
	}
});

export default Feed;