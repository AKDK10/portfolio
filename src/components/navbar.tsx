import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <ul className="nav">
      <li><NavLink className="nav-link" to="/">Home</NavLink></li>
      <li><NavLink className="nav-link" to="/busboard">Busboard</NavLink></li>
      <li><NavLink className="nav-link" to="/photo-viewer">Photo Viewer</NavLink></li>
    </ul>
  )
}

export default Navbar