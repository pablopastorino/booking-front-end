import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { SearchBar } from './components/SearchBar'
class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<SearchBar/>
			</>

		)
	}
}

export default App
