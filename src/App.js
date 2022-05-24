import React, { Component } from 'react'
import Footer from './components/Footer'

import './App.css'
import ProductList from './components/ProductList'
// import Input from './components/Input'
// import SignUpForm from './components/SignUpForm'
// import LoginForm from './components/LoginForm'

import hotels from './hotels.json'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<h1
					style={{
						textAlign: 'center',
						background: 'lightgrey',
						padding: '30px 0px',
						margin: 0,
						// position: 'fixed',
						// top: 0,
						width: '100%',
					}}
				>
					Sentite como en tu hogar
				</h1>
				<ProductList title={'Recomendaciones'} data={hotels} />
				{/* <Input name={'Name'} label={'Nombre'} type={'password'} /> */}
				{/* <SignUpForm /> */}
				{/* <LoginForm /> */}
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
