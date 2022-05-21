import React from 'react'

import '../styles/Input.css'

function Input({ name, label, error, ...rest }) {
    return (
        <div className="input-container">
            <label className="input-label font-sm" htmlFor={name}>
                {label}
            </label>
            <input {...rest} name={name} id={name} className="input-square font-sm" />
            {error && <div className="input-error">{error}</div>}
        </div>
    )
}

export default Input