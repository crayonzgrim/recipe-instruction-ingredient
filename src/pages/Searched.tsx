import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Category, Search } from '../components'
import { Card, Gradient, Grid } from '../styled'
import { Logo } from './Logo'

export const Searched = () => {
  const { search } = useParams()

  const [searchedRecipes, setSearchedRecipes] = useState([])

  const getSearched = async (name: string | undefined) => {
    if (name && name.length > 0) {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
      )
      const recipe = await data.json()
      setSearchedRecipes(recipe.results)
    }
  }

  useEffect(() => {
    getSearched(search)
  }, [search])

  return (
    <>
      <Logo />
      <Search />
      <Category />
      <h3>Searched about "{search}..."</h3>

      <Grid>
        {(searchedRecipes ?? []).map((item) => {
          const { id, image, title } = item
          return (
            <Card key={id}>
              <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Link>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}
