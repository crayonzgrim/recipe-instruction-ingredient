import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { SForm } from '../styled'

export const Search = () => {
  const navigate = useNavigate()

  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate(`/searched/${input}`)
  }

  return (
    <SForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </SForm>
  )
}
