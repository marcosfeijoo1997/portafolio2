import img1 from '../assets/Sin título.png'
import img2 from '../assets/Pagina2.png'
import img3 from '../assets/Pagina3.png'
import './style.css'
const Portafolio=()=>{
    return(<div className="portafolio" id="portafolio">
<div className='imagenes'>


       <div className='container'> <a href='https://mellow-pudding-37dd7c.netlify.app'>
<img src={img1} className="imguno"alt='imagenes'/></a>
</div>

      <a href='https://comfy-selkie-258d0f.netlify.app/'>
<img src={img2} alt='imagenes'/></a>

<a href='https://fabulous-gnome-53fe0e.netlify.app/'>
    <img src={img3} alt='imagenes'/>
</a>

</div>
    </div>)
}
export default Portafolio