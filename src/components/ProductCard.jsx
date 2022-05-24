import React, { useState } from 'react'
import Button from '@mui/material/Button'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import StarSharpIcon from '@mui/icons-material/StarSharp'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WifiIcon from '../assets/images/svg/WifiIcon'
import SwimmingIcon from '../assets/images/svg/SwimmingIcon'

import '../styles/ProductCard.css'
import { colors } from '../theme/theme'

function ProductCard({ type, name, stars, address, rating, imageUrl, highlights, liked, description }) {
    const [favorite, setFavorite] = useState(liked)


    /**
     * 
     * TODO: 
     * Refactorizar para acortar a un maximo la cantidad de caracteres, para que no se mueva demasiado el boton VER MAS
     */
    function renderStars() {
        let starsArr = []
        for (let i = 0; i < stars; i++) {
            starsArr.push(<StarSharpIcon key={i} style={{ color: colors.primary, fontSize: 16 }} />)
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
                        <span className="address-icon"><LocationOnIcon sx={{ fontSize: 18, color: colors.secondary }} /></span>
                        <span className="address-text">A {address} m del centro</span>
                        <span className="show-map clicable">MOSTRAR EN EL MAPA</span>
                    </div>
                    <div className="highlights">
                        <span className="icon-container">
                            <WifiIcon color={colors.secondary} />
                        </span>
                        <span className="icon-container">
                            <SwimmingIcon color={colors.secondary} />
                        </span>
                    </div>
                </div>
                <div className="description">
                    <span className='description-text'>{description}</span><span className='description-more clicable'>mas...</span>
                </div>
                <Button variant="contained" sx={{
                    bgcolor: colors.primary, '&:hover': {
                        borderColor: `${colors.primaryDark}`,
                        background: `${colors.primaryDark}`
                    },
                }} fullWidth>Ver más</Button>
            </div>

        </div >
    )
}

export default ProductCard