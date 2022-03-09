import React, { useState} from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Buscar gifs...')
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación:
        if (inputValue.trim().length > 2) {
            setCategories (cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
       </form>
    )
}


