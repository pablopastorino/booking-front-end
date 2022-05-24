import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('<ProductCard/>', () => {
	it('renders product card', () => {
		const { container } = render(<ProductCard type='hotel' />)
		expect(container.firstChild.className).toBe('card')
	})

	it('renders product image', () => {
		const { container } = render(
			<ProductCard
				type='hotel'
				imageUrl='https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449'
			/>
		)
		expect(container.firstChild).toHaveStyle(
			`background-image: url(${props.imageUrl})`
		)
	})
})
