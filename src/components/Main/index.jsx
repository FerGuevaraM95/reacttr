import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
	constructor () {
		super()
		this.state = {
			messages: [{
				text: 'Mensaje del Tweet',
				picture: 'https://c2.staticflickr.com/4/3331/4603158401_9e6ae18cc1.jpg',
				displayName: 'Fernando Guevara',
				usernanme: 'fernandoguevara',
				date: Date.now()
			}]
		}
	}

	render () {
		return (
				<MessageList messages={this.state.messages} /> 	
		)
	}
}

export default Main