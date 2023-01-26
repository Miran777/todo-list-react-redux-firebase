import { Link } from "react-router-dom"
import { Login } from "Components/Login"
import { useTitle } from "hooks/useTitle"

export const LoginPage = () => {
    const pageTitle = useTitle('Login')
    

    return (
        <div className="form-wrap">
            <div className="form">
                <h1 className="form-h1">Login</h1>
                <Login />
                <Link to='/register' className="form-link">or register</Link>
            </div>
        </div>
    )
}