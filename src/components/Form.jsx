import React, { useState } from 'react';
import Card from './Card';

function Form(props) {
    
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    function handleAddSubmit(event) {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        console.log( event.target);
    };

    return (
        <form onSubmit={handleAddSubmit}>
            <label htmlFor="fname">Name:</label><br />
            <input 
                type="text" 
                value={formData.name} 
                name="name" 
                onChange={handleChange} 
            /><br />
            
            <label htmlFor="lname">Password:</label><br />
            <input 
                type="password" 
                value={formData.password} 
                name="password" 
                onChange={handleChange} 
            /><br />

            {props.children}

            <Card formData={formData}></Card>
            
        </form>
    );
}

export default Form;