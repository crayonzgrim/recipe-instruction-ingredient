import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Category, Search } from '../components'
import {
  RecipeButton,
  RecipeButtonContainer,
  RecipeContainer,
  RecipeInfo
} from '../styled'
import { Logo } from './Logo'

export const Recipe = () => {
  const { name } = useParams()

  const [details, setDetails] = useState({
    title: '',
    image: '',
    summary: '',
    instructions: '',
    extendedIngredients: []
  })
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const jsonData = await data.json()

    setDetails(jsonData)
  }

  useEffect(() => {
    fetchDetails()
  }, [name])

  return (
    <>
      <Logo />
      <Search />
      <Category />
      <RecipeContainer>
        {details ? (
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>
        ) : null}
        <RecipeInfo>
          <RecipeButtonContainer>
            <RecipeButton
              className={activeTab === 'instructions' ? 'active' : ''}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </RecipeButton>
            <RecipeButton
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </RecipeButton>
          </RecipeButtonContainer>
          {activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                const { id, original } = ingredient
                return <li key={id}>{original}</li>
              })}
            </ul>
          )}
        </RecipeInfo>
      </RecipeContainer>
    </>
  )
}
