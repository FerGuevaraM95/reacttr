import React, { Component } from 'react'
import moment from 'moment'
import './message.css'

class Message extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		let dateFormat = moment(this.props.date).fromNow()
		return (
			<div className="Message-root">
				<div className="Message-user">
					<figure>
						<img className="Message-avatar" src={this.props.picture} />
					</figure>
					<span className="Message-displayName">{this.props.displayName}</span>
					<span className="Message-username">{this.props.username}</span>
					<span className="Message-date">{dateFormat}</span>	
				</div>	
				<h3>{this.props.text}</h3>
				<div className="Message-buttons">
					<div className="Message-icon"><span className="fa fa-reply"></span></div>
					<div className="Message-icon"><span className="fa fa-retweet"></span></div>
					<div className="Message-icon"><span className="fa fa-star"></span></div>
				</div>
			</div>		
		)
	}
}

export default Message