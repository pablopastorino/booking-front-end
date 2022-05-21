import React, { Component } from 'react'
import Footer from './components/Footer'

import hotels from './hotesls.json'

import './App.css'
// import ProductList from './components/ProductList'
// import Input from './components/Input'
import SignInForm from './components/SignInForm'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <ProductList title={'Recomendaciones'} data={hotels} /> */}
				{/* <Input name={'Name'} label={'Nombre'} type={'password'} /> */}
				<SignInForm />
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
