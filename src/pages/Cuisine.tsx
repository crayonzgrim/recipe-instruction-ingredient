import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Outlet, useParams } from 'react-router-dom'
import { CardCuisine, Grid } from '../styled'
import { Category, Search } from '../components'
import { Logo } from './Logo'

export const Cuisine = () => {
  const { id } = useParams()

  const [cuisine, setCuisine] = useState([])

  const getCuisine = async (name: string | undefined) => {
    if (name && name.length > 0) {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      )
      const recipes = await data.json()

      setCuisine(recipes.results)
    }
  }

  useEffect(() => {
    getCuisine(id)
  }, [id])

  return (
    <>
      <Logo />
      <Search />
      <Category />
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {(cuisine ?? []).map((item) => {
          const { id, image, title } = item
          return (
            <CardCuisine key={id}>
              <Link to={`/recipe/${id}`}>
                <img src={image} alt={title} />
                <h4>{title}</h4>
              </Link>
            </CardCuisine>
          )
        })}
      </Grid>
    </>
  )
}
