import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "Sword Art Online"]);
  //   setCategories( categories => [...categories, "Sword Art Online"]);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr></hr>

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map(category => {
            return <GifGrid 
              key={category}
              category={category} 
            />

          })
        }
      </ol>
    </>
  )
}
