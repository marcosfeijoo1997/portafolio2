import { useState } from "react"

const Navbar=()=>{

    const [hamburguerMenu,setHamburguerMenu]=useState('hamburguer');
    const changeMenu=()=>{
     setHamburguerMenu(hamburguerMenu==='hamburguer'?'cruz':'hamburguer')

    }
    const navbarClass = `navbar ${hamburguerMenu === 'cruz' ? 'hidden': 'navbar'}`;
  

 
    return (
    
            <div className={navbarClass}>
                <div className={hamburguerMenu} onClick={changeMenu}>
                <span></span> 
                <span></span>
                <span></span>
      
            
                </div>
       
                <ul className="listContainer">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobreMi">Sobre mi</a></li>
                <li><a href="#skills">Conocimientos</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contact">Contacto</a></li>
                </ul>
              
                

            </div>

        
    )

    
}
export default Navbar