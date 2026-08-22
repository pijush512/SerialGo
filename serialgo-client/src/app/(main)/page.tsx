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

      
    </div>
      
    
  )
}

export default page



