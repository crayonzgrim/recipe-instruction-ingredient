import React from 'react'
import { Category, Search } from '../components'
import { Pages } from './Pages'
import { Logo } from './Logo'

export const Home = () => {
  return (
    <>
      <Logo />
      <Search />
      <Category />
      <Pages />
    </>
  )
}
