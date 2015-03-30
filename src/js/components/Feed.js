import React from 'react';
import FeedList from './FeedList';

import $ from 'jquery';
import _ from 'lodash';

const url = "http://www.reddit.com/rising.json";


var Feed = React.createClass({
	getInitialState: function () {
		return {
			items: [],
			many: 0
		};
	},
	fetchJSON: function (limit=0) {
		let many = `?limit=${(this.props.many)}`;
		$.getJSON(url + many)
			.done((e) => {
				if (this.isMounted()) {
					this.setState({
						items: e.data.children
					});
				}
			});

	},
	componentDidMount: function () {
		this.fetchJSON(this.props.many);
	},
	render: function () {
		return (
			<FeedList items={this.state.items} />
		);
	}
});

export default Feed;