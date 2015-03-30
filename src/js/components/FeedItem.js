import React from 'react';

var FeedItem = React.createClass({
	render: function () {
		//let img = this.props.imgurl !== null ? true : false;
		return (
			<li className="list-group-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h4>
								<a href={this.props.link}>{this.props.title}</a>
							</h4>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<img className="text-center"src={this.props.imgurl}/>
							<p>
								<span className="text-center">
									<button className="btn btn-success" type="button">
										<span id="up" className="btn btn-sm btn-success">&uarr;</span>
										votes
										<span className="badge">{this.props.voteCount}</span>
										<span id="down" className="btn btn-sm btn-success">&darr;</span>
									</button>
								</span>
							</p>
						</div>
					</div>
				</div>
			</li>
		);
	}
});

export default FeedItem;