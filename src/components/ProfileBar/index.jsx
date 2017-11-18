import React, { Component } from 'react'
import './profile-bar.css'

class ProfileBar extends Component {
	constructor () {
		super()
	}


	render () {
		return (
			<div className="ProfileBar-root">
				<figure>
					<img className="ProfileBar-avatar" src={this.props.picture} />
				</figure>
				<span className="ProfileBar-username">Hola @{this.props.username}!</span>
				<button onClick={this.props.onOpenText} className="ProfileBar-button">
					<span className="fa fa-lg fa-edit"></span> Tweet!
				</button>	
			</div>
		)
	}
}


export default ProfileBar