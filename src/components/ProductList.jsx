import React from 'react'
import ProductCard from './ProductCard'

import '../styles/ProductList.css'

function ProductList({ title, data }) {

    /**
     * TODO:
     * Reacomodar estilo para que el titulo quede en linea con las cards en TABLET - DESKTOP
     * Aplicar color correspondiente de background
     */

    return (
        <section className='product-list'>
            <div className='product-list-header'>
                <h1 className='product-list-title'>{title}</h1>
            </div>
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