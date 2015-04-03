import React from 'react';

var FeedItem = React.createClass({
	render: function () {
		return (
			<li key={this.props.id}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12">
							<div className="thumbnail">
								<img className="effect" src={this.props.imgurl}/>
							</div>
						</div>
						<div className="caption">
							<h3>
								<a href={this.props.link}>{this.props.title}</a>
							</h3>
							<button className="btn btn-success" type="button">
								votes
								<span className="badge">{this.props.voteCount}</span>
							</button>
						</div>
					</div>
				</div>
			</li>
		);
	}
});

export default FeedItem;