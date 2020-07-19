import React, { FC } from 'react'
import { Link } from 'react-router-dom'


interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <h2>
      <Link to='/'>
        {title}
      </Link>
    </h2>
  )
}

export default Header
