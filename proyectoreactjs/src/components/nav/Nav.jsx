import './Nav.css';
import './Section.jsx';

import slide1 from './slide1.jpg'
import slide2 from './slide2.png'
import imgn from './Hotelia negro vertical.svg'
import logo from './Hotelia horizontal blanco.svg'

function Nav(){
    return(
    <><nav>
        <img src={logo}></img>
        <div>
        <a href="#" class="item">Inicio </a>
        <a href="#" class="item">Ubicanos </a>
        <a href="#" class="item">Opiniciones </a>
        <a href="views/login.html" class="botonsesion"><i class="fa-solid fa-user"></i>Iniciar sesion</a>
        </div>  
    </nav>
    <div class="primerimg">
        <div class="text-slider">
            <p>Lorem ipsum dolor sit ameteliter
                consectetur adipiscing elit.
            </p>
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={slide1}></img>
            </div>
            <div class="carousel-item">
                <img src={slide2}></img>
            </div>
            <div class="carousel-item">
                <img src={slide1}></img>
            </div>
            </div>
        </div>
    </div>
    <section class="container2">
    <p class="contai">
        Estamos ubicados en el barrio La Cabrera al norte de Bogotá , 
        en un contexto de lujo donde interactúan los negocios , el ocio y el descanso , 
        gracias a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina , 
        centros comerciales , almacenes de lujo y emblemáticos parques para aprovechar la
        naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están 
        el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño ,
        ponemos a tu disposición una oferta gastronómica tan sofisticada como saludable 
        a base de productos locales, cargados de lo mejor de la tradición colombiana . 
        </p>
    <img src={imgn}></img>

    </section></>
  
    );
}

export default Nav;