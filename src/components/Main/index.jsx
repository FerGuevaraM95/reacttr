import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
	constructor () {
		super()
		this.state = {
			openText: false,
			messages: [{
				id: uuid.v4(),
				text: 'Mensaje del Tweet',
				picture: 'https://c2.staticflickr.com/4/3331/4603158401_9e6ae18cc1.jpg',
				displayName: 'Fernando Guevara',
				username: 'fernandoguevara',
				date: Date.now() - 180000
			},
			{
				id: uuid.v4(),
				text: 'Este es otro mensaje!',
				picture: 'https://c2.staticflickr.com/4/3331/4603158401_9e6ae18cc1.jpg',
				displayName: 'Fernando Guevara',
				username: 'fernandoguevara',
				date: Date.now() - 1800000
			}]
		}
	}

	handleOpenText (event) {
		event.preventDefault()
		this.setState({ openText: true })
	}

	renderOpenText () {
		if (this.state.openText) {
			return <InputText />
		}
	}

	render () {
		return (
			<div>
				<ProfileBar
					picture={this.props.user.photoURL}
					username={this.props.user.email.split('@')[0]}
					onOpenText={this.handleOpenText.bind(this)}
				/>
				{this.renderOpenText()}
				<MessageList messages={this.state.messages} /> 	
			</div>	
		)
	}
}

export default Main