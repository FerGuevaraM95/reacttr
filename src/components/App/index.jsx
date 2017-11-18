import React, { Component } from 'react'
import 'normalize-css'

import './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
	constructor () {
		super()

		this.state = {
			user: {
				photoURL: 'https://c2.staticflickr.com/4/3331/4603158401_9e6ae18cc1.jpg',
				email: 'luisfernandoguevara95@gmail.com',
				onOpenText: false
			}
		}
	}
	render () {
		return (
			<div>
				<Header />
				<Main user={this.state.user} />
			</div>	
			)
	}
}

export default App