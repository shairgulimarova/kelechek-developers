import * as React from 'react'
import { Link } from 'gatsby'
import feet from "../images/feet.svg"
import  { container, main, title, navbar_menu, menu_link, navbar_inner, kd} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <div  className={navbar_inner}>
        <div>
        <Link to="/"><img src={feet} width={90} alt='logo'/></Link>
        
        </div>
        <div> <p className={kd}>Kelechek Developers</p></div>
        <div>
               <ul className={navbar_menu}>
          <li><Link to="/" className={menu_link}>Home</Link></li>
          <li><Link to="/about"className={menu_link} >About</Link></li>
          <li><Link to="/projects" className={menu_link}>Projects</Link></li>
          <li><Link to="/about" className={menu_link}>Contacts</Link></li>
        </ul>
        </div>
       

        </div>

     
      </nav> 
      <main className={main}>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout