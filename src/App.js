import React, { Component } from 'react'
import Footer from './components/Footer'

import logo from './logo.svg'

import hotels from './hotesls.json'

import './App.css'
import ProductList from './components/ProductList'
import Input from './components/Input'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <ProductList title={'Recomendaciones'} data={hotels} /> */}
				<Input name={'Name'} label={'Nombre'} type={'password'} />
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
