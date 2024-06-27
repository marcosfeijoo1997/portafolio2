import img1 from '../assets/Ferreteria.png'
import img2 from '../assets/Pagina2.png'
import img3 from '../assets/Pagina3.png'
import img4 from '../assets/Pagina4.png'
import img5 from '../assets/bikeshop.png'
import Javascript from '../assets/logosDev/js.png'
import Reactlogo from '../assets/logosDev/React_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import Node from '../assets/logosDev/nodelogo.png'
import Html from '../assets/logosDev/html.png'
import Css from '../assets/logosDev/css.png'
import Firebase from '../assets/logosDev/firebase.png'
import Github from '../assets/logosDev/Github.png'
import Bootstrap from '../assets/logosDev/Bootstrap.png'

import './style.css'
const Portafolio=()=>{
    return(<div className="portafolio" id="portafolio">
           <h1>Mis proyectos</h1>
    <div className='imagenes'>




    
     <div className='card'>
        
    <div className='front'>
            <a href='https://ferreteriadufer.netlify.app'>
            <img src={img1} alt='imagenes'/>
</a></div>
    <div className='back'>
        <a href="https://ferreteriadufer.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li>
        <img src={Css}></img>
        <p>Css</p>
     </li>
     <li>
        <img src={Reactlogo}></img>
        <p>React</p>
     </li>
     <li>
        <img src={Firebase}></img>
        <p>Firebase</p>
     </li>
     <li>
        <img src={Bootstrap}></img>
        <p>Bootstrap</p>
     </li>
     
     </ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://laforjasyleindustrial.netlify.app'>
    <img src={img2} alt='imagenes'/></a></div>
    <div className='back'>  <a href="https://laforjasyleindustrial.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li>
        <img src={Css}></img>
        <p>Css</p>
     </li>
     <li>
        <img src={Reactlogo}></img>
        <p>React</p>
     </li>
     <li>
        <img src={Firebase}></img>
        <p>Firebase</p>
     </li>
     <li>
        <img src={Bootstrap}></img>
        <p>Bootstrap</p>
     </li>
     
     </ul>  </a></div>
    </div>
    <div className='card'>
    <div className='front'>
    <a href='https://bikeshoppedalcity.netlify.app'>
        <img src={img5} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href="https://bikeshoppedalcity.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li>
        <img src={Css}></img>
        <p>Css</p>
     </li>
     <li>
        <img src={Reactlogo}></img>
        <p>React</p>
     </li>
     <li>
        <img src={Firebase}></img>
        <p>Firebase</p>
     </li>
     <li>
        <img src={Bootstrap}></img>
        <p>Bootstrap</p>
     </li>
     
     </ul>  </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://anglecalculator.netlify.app'>
        <img src={img3} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href='https://anglecalculator.netlify.app'><h1>Lenguajes usados</h1>
    <ul>  <li>
        <img src={Html}></img>
        <p>Html</p>
     </li>
     <li>
        <img src={Css}></img>
        <p>Css</p>
     </li>
   
   
     <li>
        <img src={Javascript}></img>
        <p>JavaScript</p>
     </li>
     
     </ul>  </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://fourinline.netlify.app'>
        <img src={img4} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href="https://fourinline.netlify.app"><h1>Lenguajes usados</h1>
    <ul>  <li>
        <img src={Html}></img>
        <p>Html</p>
     </li>
     <li>
        <img src={Css}></img>
        <p>Css</p>
     </li>
   
   
     <li>
        <img src={Javascript}></img>
        <p>JavaScript</p>
     </li>
     
     </ul> </a></div>
     
    </div>
    
    
    

    
    
    
    
    
    
    
    </div>
    
        </div>)
}
export default Portafolio