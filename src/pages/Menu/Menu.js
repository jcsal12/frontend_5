import {Link } from 'wouter';
import './Menu.css';
import logo from './../../images/LOGO_ESCOOL2.svg';
import logoName from './../../images/fuente.svg';
const Menu = () => (

        <ul className='menu'>
            <div className='logos'>
            <li><img src={logo}/></li>
            <li><img src={logoName}/></li>
            </div>
            <li className='titulo'><Link to="/">Home</Link></li>
            <li className='elementos_menu'><Link to="/escolares">Escolares</Link></li>
            <li className='elementos_menu'><Link to="/populares">Populares</Link></li>
            <li className='elementos_menu'><Link to="/lectura">De Lectura</Link></li>
        </ul>
    )

export default Menu;