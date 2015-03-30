import React from 'react';
import FeedItem from './FeedItem';

var FeedList = React.createClass({

	render: function () {
		let feedItems = this.props.items.map(function (item) {
			return <FeedItem key={item.data.created_utc} title={item.data.title}
				link={"http://reddit.com" + item.data.permalink}
				imgurl={item.data.thumbnail} voteCount={item.data.ups}/>;
		});
		return (
			<ul className="list-group">
			{feedItems}
			</ul>
		);
	}
});

export default FeedList;