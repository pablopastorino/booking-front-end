import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App/>', () => {
	it('renders header', () => {
		render(<App />)
		expect(screen.getByText(/sentite como en tu hogar/i)).toBeInTheDocument
	})

	it('renders footer', () => {
		const { container } = render(<App />)
		const footer = container.querySelector('footer >.copyright')
		expect(footer).toBeInTheDocument
	})

	test('renders product list', () => {
		render(<App />)
		const title = screen.getByText(/recomendaciones/i)
		expect(title).toBeInTheDocument
	})
})
