"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const page = () => {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
      <h1>Home page</h1>

      <button onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"}
        Theme Toggle</button>
    </div>
      
    
  )
}

export default page



