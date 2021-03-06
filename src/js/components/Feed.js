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
	fetch: function (direction) {
		let limit = `?limit=${this.state.many}`;
		if(!_.isEmpty(this.state.items)){
			let first = _.first(this.state.items).data.id;
			this.setState({
				before: first
			});
		}
		if (direction === 'after') {
			let after = this.state.after === "" ? "" : `&after=${this.state.after}`;
			$.getJSON(url + limit + after)
				.done(function (e) {
					if (this.isMounted()) {
						let joined = this.state.items.concat(e.data.children);
						this.setState({
							items: joined,
							after: e.data.after
						});
					}
				}.bind(this));
		} else {
			let before = this.state.before === "" || this.state.before == null ? "" : `&before=${this.state.before}`;
			$.getJSON(url + limit + before)
				.done(function (e) {
					if (this.isMounted()) {
						let joined = e.data.children.concat(this.state.items);
						this.setState({
							items: joined,
							before: e.data.before
						});
					}
				}.bind(this));
		}
	},
	handleScroll: function () {
		if ($(window).scrollTop() + $(window).height() === $(document).height()) {
			this.fetch('after');
		} else if ($(window).scrollTop() - $(window).height() === -$(window).height()) {
			this.fetch('before');
		}
	},
	componentWillMount: function(){
		this.fetch(this.props.many);
	},
	componentDidMount: function () {
		$(window).on('scroll', this.handleScroll);
	},
	shouldComponentUpdate: function(nextProps, nextState){
		return true;
	},
	render: function () {
		return (
			<FeedList items={this.state.items} />
		);
	}
});

export default Feed;