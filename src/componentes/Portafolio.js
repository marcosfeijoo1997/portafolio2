import img1 from '../assets/Sin título.png'
import img2 from '../assets/Pagina2.png'
import img3 from '../assets/Pagina3.png'
import img4 from '../assets/Pagina4.png'
import './style.css'
const Portafolio=()=>{
    return(<div className="portafolio" id="portafolio">
   
    <div className='imagenes'>
     <div className='card'>
    <div className='front'>
            <a href='https://mellow-pudding-37dd7c.netlify.app'>
    <img src={img1} alt='imagenes'/></a></div>
    <div className='back'>
        <a href="https://mellow-pudding-37dd7c.netlify.app"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     <li className="ri-reactjs-line"></li>
     <li className="bootstrapcontainer bi-bootstrap-fill"></li></ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://comfy-selkie-258d0f.netlify.app/'>
    <img src={img2} alt='imagenes'/></a></div>
    <div className='back'>  <a href="https://comfy-selkie-258d0f.netlify.app/"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     <li className="ri-reactjs-line"></li>
     <li className="bootstrapcontainer bi-bootstrap-fill"></li></ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://fabulous-gnome-53fe0e.netlify.app/'>
        <img src={img3} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href='https://fabulous-gnome-53fe0e.netlify.app/'><h1>Lenguajes usados</h1>
    <ul>
    <li className="ri-html5-fill"></li>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     
    
    
    
     </ul> </a></div>
    </div>
    
    <div className='card'>
    <div className='front'>
    <a href='https://candid-llama-3673e9.netlify.app/'>
        <img src={img4} alt='imagenes'/>
    </a></div>
    <div className='back'>  <a href="https://candid-llama-3673e9.netlify.app/"><h1>Lenguajes usados</h1>
    <ul>
     <li className="ri-html5-fill"></li>
     <li className="ri-css3-fill"></li>
     <li className="ri-javascript-fill"></li> 
     </ul> </a></div>
    </div>
    
    
    
    
    
    
    
    </div>
    
        </div>)
}
export default Portafolio