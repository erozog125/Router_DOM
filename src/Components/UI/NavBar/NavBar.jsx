import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/segundaPage">
              <button>Segunda Page</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
