import { NavLink } from 'react-router-dom'



export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    <nav>
    <div>
      <img className="puntero" src="https://img.icons8.com/color/480/pointer.png" alt="puntero pokemon go" />
    </div>
    <div>
      <NavLink className={setActiveClass} end to='/'>
        Home
      </NavLink>
      {' - '}
      <NavLink className={setActiveClass} to='/pokemon'>
        Pokemón
      </NavLink>
    </div>
    </nav>
  )
}
