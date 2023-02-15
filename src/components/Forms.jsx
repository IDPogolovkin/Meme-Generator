import React from 'react'
import '../forms.css'

const Forms = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        isFriendly: true,
        employmentStatus: '',
        favColor: ''
    })

    function handleChange(event) {
        const [name, value, type, checked] = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
            console.log(formData)
    }


  return (
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />

            <input
                type="email"
                placeholder='Email'
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                placeholder='comment'
                name="comment"
                value={formData.comment}
                onChange={handleChange}
            />

            <input 
                type="checkbox"
                name='isFriendly'
                id='isFriendly'
                checked={formData.isFriendly}
                onChange={handleChange}
             />
             
             <label htmlFor='isFriendly'>Are you friendly?</label>
             <br />
             <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name='employmentStatus'
                    value='unemployed'
                    checked={formData.employmentStatus === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input
                    type="radio"
                    id='part-time'
                    name='employmentStatus'
                    value='part-time'
                    checked = {formData.employmentStatus === "part-time"}
                    onChange={handleChange}
                />

                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name='employmentStatus'
                    value='full-time'
                    checked={formData.employmentStatus === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br/>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
            id="favColor"
            value={formData.favColor}
            name='favColor'
            onChange={handleChange}
            >
                <option value="">Choose</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <button>Submit</button>
        </form> 
  )
}

export default Forms