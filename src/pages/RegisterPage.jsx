import { Link } from "react-router-dom"
import { SignUp } from "Components/SignUp"
import { useTitle } from "hooks/useTitle"

export const RegisterPage = () => {
    const pageTitle = useTitle('Register')

    return (
        <div className="form-wrap">
            <div className="form">
                <h1 className="form-h1">Reigster</h1>
                <SignUp />
                <Link to='/login' className="form-link">sign in</Link>
            </div>
        </div>
    )
}