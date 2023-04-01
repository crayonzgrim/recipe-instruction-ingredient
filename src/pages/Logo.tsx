import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { MainNav, MainLogo } from '../styled'

export const Logo = () => {
  return (
    <MainNav>
      <GiKnifeFork />
      <MainLogo to={'/'}>Food Recipe</MainLogo>
    </MainNav>
  )
}
