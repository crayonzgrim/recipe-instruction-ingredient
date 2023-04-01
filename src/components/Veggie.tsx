import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Card, Container, Gradient } from '../styled'
import { Link } from 'react-router-dom'

export const Veggie = () => {
  const [veggie, setVeggie] = useState([])

  const getVeggieFoods = async () => {
    const getFromStorage = localStorage.getItem('veggie')

    if (getFromStorage) {
      setVeggie(JSON.parse(getFromStorage))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      )
      const data = await api.json()

      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }
  }

  useEffect(() => {
    getVeggieFoods()
  }, [])

  return (
    <div>
      <Container>
        <h3>My Vegeterian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem'
          }}
        >
          {veggie.map((recipe) => {
            const { id, title, image } = recipe
            return (
              <SplideSlide key={id}>
                <Card>
                  <Link to={`/recipe/${id}`}>
                    <p>{title}</p>
                    <img src={image} alt={title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Container>
    </div>
  )
}
