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
										<span id="up" className="btn btn-sm btn-success">&uarr;</span>
										votes
										<span className="badge">{this.props.voteCount}</span>
										<span id="down" className="btn btn-sm btn-success">&darr;</span>
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