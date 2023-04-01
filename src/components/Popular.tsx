import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Card, Container, Gradient } from '../styled'
import { Link } from 'react-router-dom'

export const Popular = () => {
  const [randomFoods, setRandomFoods] = useState([])

  const getPopularRandom = async () => {
    const getFromStorage = localStorage.getItem('foods')

    if (getFromStorage) {
      setRandomFoods(JSON.parse(getFromStorage))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      )
      const data = await api.json()

      localStorage.setItem('foods', JSON.stringify(data.recipes))
      setRandomFoods(data.recipes)
    }
  }

  useEffect(() => {
    getPopularRandom()
  }, [])
  return (
    <div>
      <Container>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem'
          }}
        >
          {randomFoods.map((recipe) => {
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
