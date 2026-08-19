import React from 'react'

const MainLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <header></header>
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}

export default MainLayout