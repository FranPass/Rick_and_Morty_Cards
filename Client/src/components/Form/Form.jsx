import  { useState } from 'react';
import validation from './validation'

export default function Form({login}) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <form>
            <label htmlFor='email' >EMAIL</label>
            <input
                onChange={handleChange} 
                value={userData.email} 
                type="text" 
                name="email" 
                id="email" 
            />
            {errors.e1 ? <p>{errors.e1}</p> : errors.e2 ? <p>{errors.e2}</p> : <p>{errors.e3}</p> }

            <label htmlFor='password' >PASSWORD</label>
            <input 
                onChange={handleChange}
                value={userData.password} 
                type="text" 
                name="password" 
                id="password" 
            />
            {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}

            <button onClick={handleSubmit} type='submit' >Submit</button>
        </form>
    )
}