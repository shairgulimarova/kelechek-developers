import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from "react"; 
import feet from "../images/feet.svg"
import menuIcon from "../images/menu.svg"
import  { container, main, title, navbar_menu, menu_link, navbar_inner, navbar_toggle, navbar_menu__show, mobile} from './layout.module.scss'


const Layout = ({ pageTitle, children }) => {

  const [menuActive, setMenuActive] = useState(false);

  const showMenu = ()=>{
      setMenuActive(!menuActive);
  }
  

  

  return (
    <div className={container}>
      <nav>
        <div className={navbar_inner}>         
        <div  >
        
        <Link to="/"><img src={feet} width={250} alt='logo'/></Link>
        </div>
        <div>
           <button onClick={showMenu}  className={navbar_toggle}> 
       <img src={menuIcon} alt="movers"></img>
       </button>
        </div>
      
        
       <div className={mobile}> 
               <ul className={menuActive ? navbar_menu__show : navbar_menu}>
          <li><Link to="/" className={menu_link}>Home</Link></li>
          <li><Link to="/about"className={menu_link} >About</Link></li>
          <li><Link to="/projects" className={menu_link}>Projects</Link></li>
          <li><Link to="/contacts" className={menu_link}>Contacts</Link></li>
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