import './style.css'
import Javascript from '../assets/logosDev/js.png'
import React from '../assets/logosDev/React_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import Node from '../assets/logosDev/nodelogo.png'
import Hml from '../assets/logosDev/html.png'
import Css from '../assets/logosDev/css.png'
import Firebase from '../assets/logosDev/firebase.png'
import Github from '../assets/logosDev/Github.png'






const Descripcion=()=>{

    return (<div className='skillsContainer'>
        <div className="descripcion" id='sobreMi'>Nombre: Marcos Feijoo

<p>Descripción:
Soy un desarrollador front-end con experiencia en el diseño y desarrollo de sitios web y aplicaciones interactivas. Mi objetivo principal es crear experiencias de usuario atractivas y funcionales utilizando las últimas tecnologías web.
</p>
Habilidades:

<p>HTML: Tengo conocimiento de HTML5 y estoy familiarizado con las mejores prácticas para estructurar y marcar contenido web.</p>

<p>Tengo experiencia en la creación de diseños atractivos y responsivos. Estoy al tanto de las últimas tendencias en diseño web y sé cómo utilizar técnicas como Flexbox y Grid para lograr diseños flexibles y adaptables.</p>

<p>JavaScript: Tengo habilidades sólidas en JavaScript y puedo crear interacciones dinámicas y funcionales en una página web. Estoy familiarizado con frameworks y bibliotecas populares como react y estoy constantemente aprendiendo y mejorando mis habilidades en JavaScript.
</p>

<p>React: Tengo experiencia en el desarrollo de aplicaciones web utilizando React. Puedo crear componentes reutilizables, gestionar el estado de la aplicación y trabajar con enrutamiento para crear aplicaciones de una sola página (SPA) eficientes y fáciles de mantener.
</p>
<p>GitHub: Estoy familiarizado con el control de versiones y utilizo Git y GitHub para colaborar en proyectos y gestionar el código fuente de manera efectiva.
</p>
<p>Bootstrap: Tengo experiencia en el uso del framework Bootstrap para crear sitios web con una apariencia profesional y receptiva. Puedo aprovechar las características y componentes de Bootstrap para agilizar el desarrollo y garantizar la coherencia visual en diferentes dispositivos.
</p>
<p>Educación: me encuentro en el segundo año de la carrera licenciatura en sistemas en la faculta de la Unla, y además estoy recibido como profesor de Matemática en el isfd n°102</p>
</div>
    <div className='skills' id='skills'>

      <p>Conocimientos</p> 
      <div className='logos'> 
 <li><img src={Hml} alt='logos'/>
    <p>HTML</p>
 </li>



 
 <li>
 <img src={Css}  alt='logos'/>
 <p>CSS</p>
 </li>

 <li>
 <img src={Javascript}  alt='logos'/>
 <p>JavaScript</p></li> 
 <li>
    <img src={Firebase}  alt='logos'/>
    <p>Firebase</p></li>




 

 

 </div>
 <div className='logos'>
 <li>
 <img src={React}  alt='logos'/>
 <p>React.js</p></li> 
 <li>
    <img src={Node}  alt='logos'/>
    <p>Node</p></li>
 <li>
    <img src={Github}  alt='logos'/>
    <p>Github</p></li>

 



 
 
 </div>


       
    </div>
    
    
    
    
    
    </div>)


}
export default Descripcion