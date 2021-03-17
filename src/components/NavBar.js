import React from 'react'
import { CartWidget } from './CartWidget.js';

export const NavBar = () => {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3 class="navbar-brand">DP Componentes</h3>
        <a class="nav-item nav-link" href="">Motherboards</a>
        <a class="nav-item nav-link" href="">Procesadores</a>
        <a class="nav-item nav-link" href="">RAMs</a>
        <a class="nav-item nav-link" href="">SSDs</a>
  <CartWidget />
  </nav>
  )
}

//<nav class="navbar navbar-expand-lg navbar-light bg-light">
	//		<a class="navbar-brand" href="index.html">Página principal</a>
		//	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			//  <span class="navbar-toggler-icon"></span>
		//	</button>
		//	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			//  <div class="navbar-nav">
			//	<a class="nav-item nav-link" href="inversiones.html">Inversiones</a>
			//	<a class="nav-item nav-link active" href="simulador.html">Simulador</a>
			//	<a class="nav-item nav-link" href="cursos.html">Cursos</a>
			//	<a class="nav-item nav-link" href="contacto.html">Contacto</a>
			//	<a class="nav-item nav-link" href="preguntas-frecuentes.html">Preguntas frecuentes</a>
			//	<a class="nav-item nav-link" href="normativas.html">Normativas</a>
			 // </div>
		//	</div>
	//	</nav>