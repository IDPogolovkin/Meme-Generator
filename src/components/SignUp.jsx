import '../signup.css'

import React from 'react'

const SignUp = () => {

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        checkPassword: '',
        okayToEmail: true
    })

    function onHandleChange(event){
        const[name, value, type, checked] = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.checkPassword ?
        console.log('Successfully signed up') :
        console.log('passwords to not match')
        formData.okayToEmail && console.log('Thanks for signing up for our newsletter!')
    }

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                onChange={onHandleChange}
                name='email'
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                onChange={onHandleChange}
                name='password'
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                onChange={onHandleChange}
                name='checkPassword'
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    onChange={onHandleChange}
                    name='okayToEmail'
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
</div>
  )
}

export default SignUp