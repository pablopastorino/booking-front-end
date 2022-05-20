import React from 'react'
import ProductCard from './ProductCard'

import '../styles/ProductList.css'

function ProductList({ title, data }) {

    return (
        <section className='product-list'>
            <header className='product-list-header'>
                <h1 className='product-list-title'>{title}</h1>
            </header>
            <main className='product-list-items'>
                {data.map((item, index) => {
                    return (
                        <ProductCard key={index} {...item} />
                    )
                })}
            </main>
        </section>
    )
}

export default ProductList