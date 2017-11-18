import React, { Component } from 'react'
import './input-text.css'

class InputText extends Component {
	render () {
		return (
			<form className="InputText-form" onSubmit={this.props.onSendText}>
				<textarea className="InputText-text" name='text'></textarea>
				<div className="InputText-buttons">
					<button className="InputText-close" onClick={this.props.onCloseText}>Cerrar</button>
					<button className="InputText-send" type='submit'>Enviar</button>
				</div>
			</form>
		)
	}
}

export default InputText