import img1 from '../assets/Sin título.png'
import img2 from '../assets/Pagina2.png'
import img3 from '../assets/Pagina3.png'
import img4 from '../assets/Pagina4.png'
import img5 from '../assets/bikeshop.png'
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
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     <li className="ri-reactjs-line"></li>
     <li className="ri-bootstrapcontainer bi-bootstrap-fill"></li></ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://laforjasyleindustrial.netlify.app'>
    <img src={img2} alt='imagenes'/></a></div>
    <div className='back'>  <a href="https://laforjasyleindustrial.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     <li className="ri-reactjs-line"></li>
     <li className="ri-bootstrapcontainer bi-bootstrap-fill"></li></ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://anglecalculator.netlify.app'>
        <img src={img3} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href='https://anglecalculator.netlify.app'><h1>Lenguajes usados</h1>
    <ul>
    <li className="ri-html5-fill"></li>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     
    
    
    
     </ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://fourinline.netlify.app'>
        <img src={img4} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href="https://fourinline.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-html5-fill"></li>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     </ul> </a></div>
     
    </div>
    <div className='card'>
    <div className='front'>
    <a href='https://bikeshoppedalcity.netlify.app'>
        <img src={img5} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href="https://bikeshoppedalcity.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-html5-fill"></li>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     <li className="ri-reactjs-line"></li>
     </ul> </a></div>
    </div>
    
    

    
    
    
    
    
    
    
    </div>
    
        </div>)
}
export default Portafolio