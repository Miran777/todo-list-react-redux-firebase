import { useState } from "react"

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <>
            <input className="form-input"
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='email'
            /> 
            <input className="form-input"
                type='password'
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder='password'
            /> 
            <button className="form-button"
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </>
    )
}