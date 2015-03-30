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
			scrollBottom: false
		};
	},
	fetchJSON: function () {
		let many = `?limit=${(this.props.many)}`;
		$.getJSON(url + many)
			.done((e) => {
				if (this.isMounted()) {
					this.setState({
						items: e.data.children,
						many: this.props.many,
						scrollBottom: false
					});
				}
			});

	},
	handleScroll: function () {
		let scrollToButtom = $(window).scrollTop() + $(window).height() === $(document).height();
		if (scrollToButtom) {
			this.props.many += 5;
			this.fetchJSON();
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