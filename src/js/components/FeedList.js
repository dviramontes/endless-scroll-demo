import React from 'react';
import FeedItem from './FeedItem';

var FeedList = React.createClass({

	render: function () {
		let feedItems = this.props.items.map(function (item) {
			let unlisted = ['self', 'nsfw','default', ""];
			let img = '';
			if(unlisted.indexOf(item.data.thumbnail) < 0){
				img = item.data.thumbnail;
			}else {
				img = "https://b.thumbs.redditmedia.com/hk0MZr7rnkM15h6V8bm7M12Q50XEva85QxKhOIe1bNI.png";

			}
			return <FeedItem
				key={item.data.created_utc}
				title={item.data.title}
				link={"http://reddit.com" + item.data.permalink}
				imgurl={img}
				voteCount={item.data.ups}/>;
		});
		return (
			<ul className="list-group">{feedItems}</ul>
		);
	}
});

export default FeedList;