import {Link} from "react-router-dom"

function Footer() {
    
    return (
        
        <footer>
       
        <div class="container-footer-all">
         
             <div class="container-body">
 
                 <div class="colum1">
                     <h1>More information For Nike</h1>
 
                     <p> Nike, Inc.​ es una empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de equipamiento deportivo: balones, calzado, ropa, equipo, accesorios y otros artículos deportivos.</p>
 
                 </div>
 
                 <div class="colum2">
 
                     <h1>Social Media</h1>
 
                     <div class="row">
                        <a href="https://www.facebook.com/nike" target="_blank" Tittle="Pagina oficial de nike" ><img src="multimedia/iconos/instagram" className="container__icono" alt=""></img></a>
                         <label>Seguinos en Facebook</label>
                     </div>
                     <div class="row">
                        <a href="https://www.instagram.com/nike.__shoes/" target="_blank" Tittle="Pagina oficial de nike" ><img src="multimedia/iconos/facebook" className="container__icono" alt=""></img></a>
                         <label>Seguinos en Instagram</label>
                     </div>
                     
                 </div>
 
                 <div class="colum3">
 
                     <h1> More Contacts</h1>
 
                  
 
                  <div class="row2">
                         <img src="multimedia/iconos/telefono.svg"></img>
                         <label>2227------</label>
                     </div>
 
                     <div class="row2">
                         <img src="multimedia/iconos/user.svg"></img>
                          <label>nikearg@gmail.com</label>
                     </div>
 
                 </div>
 
             </div>
         
         </div>
         
         <div class="container-footer">
                <div class="footer">
                     <div class="copyright">
                         © 2021 Todos los Derechos Reservados | <a href="">Nike</a>
                     </div>
 
                     <div class="information">
                         <a href="">Informacion Compañia</a> | <a href="">Privacion y Politica</a> | <a href="">Terminos y Condiciones</a>
                     </div>
                 </div>
 
             </div>
         
     </footer>
    );
}

export default Footer
