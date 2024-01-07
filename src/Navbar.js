import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import { Container } from './styles';

function Navbar() {

  return (
    <nav className="nav">
      <Link to="/" className="site-title" >Sitecap</Link>
      <ul>
        <CustomLink to="/carrinho">Carrinho</CustomLink>
        <CustomLink to="/cadastro">Cadastro</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({path: resolvePath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;