import React, { useState } from 'react'
import Button from '@mui/material/Button'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import StarSharpIcon from '@mui/icons-material/StarSharp'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WifiIcon from '../images/WifiIcon'
import SwimmingIcon from '../images/SwimmingIcon'

import colors from '../configuration/colors'
import '../styles/ProductCard.css'

function ProductCard({ type, name, stars, address, rating, imageUrl, highlights, liked, description }) {
    const [favorite, setFavorite] = useState(liked)

    function renderStars() {
        let starsArr = []
        for (let i = 0; i < stars; i++) {
            starsArr.push(<StarSharpIcon key={i} style={{ color: colors.PRIMARY, fontSize: 16 }} />)
        }
        return starsArr
    }

    return (
        <div className="card">
            <div className="card-image" style={{
                background: `url(${imageUrl})`,
                backgroundOrigin: 'border-box',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <FavoriteSharpIcon sx={{ fontSize: 28, color: favorite ? colors.PRIMARY : 'white' }} onClick={() => setFavorite(!favorite)} />
            </div>
            <div className="card-content">
                <div className="header">
                    <div className="left">
                        <div className="type"><span className="type-text">{type.toUpperCase()}</span> <span className='stars'>{renderStars()}</span></div>
                        <div className="name">{name}</div>
                    </div>
                    <div className="right">
                        <div className="rating">{rating}</div>
                        <div className="rating-text">Muy bueno</div>
                    </div>
                </div>
                <div className="details">
                    <div className="address">
                        <span className="address-icon"><LocationOnIcon sx={{ fontSize: 18, color: colors.SECONDARY }} /></span>
                        <span className="address-text">A {address} m del centro</span>
                        <span className="show-map clicable">MOSTRAR EN EL MAPA</span>
                    </div>
                    <div className="highlights">
                        <span className="icon-container">
                            <WifiIcon color={colors.SECONDARY} />
                        </span>
                        <span className="icon-container">
                            <SwimmingIcon color={colors.SECONDARY} />
                        </span>
                    </div>
                </div>
                <div className="description">
                    <span className='description-text'>{description}</span><span className='description-more clicable'>mas...</span>
                </div>
                <Button variant="contained" sx={[
                    { textTransform: 'none', bgcolor: colors.PRIMARY }, {
                        '&:hover': {
                            background: colors.PRIMARY,
                            filter: 'brightness(.85)'
                        }
                    }]} fullWidth>Ver más</Button>
            </div>

        </div >
    )
}

export default ProductCard