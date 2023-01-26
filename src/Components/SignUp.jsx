import { Form } from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "store/userSlice"
import { useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            navigate('/', true)
        })
        .catch(error => alert(error.message))
    }

    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    )
}