import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import useWindowSize from '../hooks/useWindowSize'

import colors from '../configuration/colors.json'
import breakpoints from '../configuration/breakpoints.json'
import text from '../configuration/text.json'

import '../styles/Footer.css'

function Footer() {
    const { width } = useWindowSize()

    function displaySocialLinks() {
        if (width > breakpoints.MOBILE) {
            return (

                <div className="social-container">
                    <FacebookOutlinedIcon sx={{ fontSize: "2rem" }} />
                    <span className='social-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3300" height="3300" viewBox="0 5 1036 990"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" fill="#ffffff" /></svg>
                    </span>
                    <TwitterIcon sx={{ fontSize: "2rem" }} />
                    <InstagramIcon sx={{ fontSize: "2rem" }} />
                </div>

            )
        }
    }

    return (
        <footer style={{ background: colors.PRIMARY }}>
            <span className='copyright'>
                &#x24B8; {new Date().getFullYear()} {text.BRAND_NAME}
            </span>
            {displaySocialLinks()}
        </footer >
    )
}

export default Footer