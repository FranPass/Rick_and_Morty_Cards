import  { useState } from 'react';
import validation from './validation'
import s from './Form.module.css'

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
        <div className={s.container}>
            <form className={s.form}>
                <div className={s.image}>
                    <img src="https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fseries%2F000%2F003%2F130%2Frick-y-morty-1.jpg&nuevoancho=690&medio=abc" alt="" />
                </div>
                <div className={s.input}>
                    <h2>Bienvenido!</h2>
                    <input
                        onChange={handleChange} 
                        value={userData.email} 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder='Email'
                    />
                    <div className={s.error}>
                    {errors.e1 ? <p>{errors.e1}</p> : errors.e2 ? <p>{errors.e2}</p> : <p>{errors.e3}</p> }
                    </div>

                    <input 
                        onChange={handleChange}
                        value={userData.password} 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder='Contraseña'
                    />
                    <div className={s.error}>
                    {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
                    </div>

                    <button onClick={handleSubmit} type='submit' >Entrar</button>
                </div>
            </form>
        </div>
    )
}