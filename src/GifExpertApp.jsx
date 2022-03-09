import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch'])

  /*const handleAdd = () => {
    setCategories([...categories, 'Hunter']);
    setCategories (cats => [...cats, 'Hunter'])
*/


  return (
    <>
        <h2>Gif App</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
          {/*<button onClick= {handleAdd}>Agregar</button>*/}
        <ol>
         {categories.map(category => (
           <GifGrid 
            key={category}
            category={category} />
           /*return <li key = {category}> {category} </li>
           --------Lo reemplazamos por el nuevo componente GifGrid !*/
           //El key no puede ser el índice, y tiene que ser único.
         ))}
        </ol>
    </>
  )
}

/*Creamos una pequeña "regla" para que el usuario utilice 
nuestro componente con los argumentos que estamos 
esperando*/
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}


/* MAP(ARGUMENTO_1, ARGUMENTO_2):
return (
    <>
        <h2>GifExpertApp</h2>
        <hr />
        <ol>
         {categories.map((category, i) => {
           return <li key = {i}> {category} </li>
         })}
        </ol>
    </>
  ) 
En nuestro caso, lo reducimos.
----------------------------------------------------------------------------
//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'] 
  /*No debemos utilizar el const para crear un array que va a ser modificado
  a lo largo del tiempo, ejemplo, porque agreguemos más elementos. En su caso, 
  utilizaremos el useState: 

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
----------------------------------------------------------------------------
***AÑADIR ELEMENTOS AL ARRAY
  /*const handleAdd = () => {
    setCategories([...categories, 'Hunter']);
    //setCategories (cats => [...cats, 'Hunter'])
    /*Esta opción implica :
    setCategories(callback)
    Este callback: (estadoAnterior => nuevoEstado) 
    nuevoEstado => [...] -> Nuevo arreglo
    Nuevo arreglo: [...copiaDeValoresAnteriores, ValorAñadido]
  }

  */