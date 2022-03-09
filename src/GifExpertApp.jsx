import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch'])


  return (
    <>
        <h2>Gif App</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
         {categories.map(category => (
           <GifGrid 
            key={category}
            category={category} />
         ))}
        </ol>
    </>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}