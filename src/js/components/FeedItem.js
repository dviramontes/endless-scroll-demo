import React from 'react';

var FeedItem = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<div className="thumbnail">
							<img className="effect" src={this.props.imgurl}/>
							<div className="caption">
								<h3>
									<a href={this.props.link}>{this.props.title}</a>
								</h3>
								<span className="text-center">
									<button className="btn btn-success" type="button">
										votes <span className="badge"> {this.props.voteCount} </span>
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default FeedItem;