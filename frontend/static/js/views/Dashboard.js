import AbstractView from "./AbstractView.js";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Dashboard')
    }
    async getHtml(){
        return `
        <div class="mainContainer">
        <div class="noticiaPrincipal row shadow">
            <div class="noticiaInicial col-md-8">
            <img src="https://viveloensaltillo.com/wp-content/uploads/2021/11/1254x851usts.png" class="img-fluid" alt="" >
            <div class="contenidoNoticiaPrincipal row">
                <h1 class="col-md-6">Nuevo ciclo escolar Enero - Junio 2023</h1>
                <div class="col-md-6 ">
                <p>Inicia un nuevo Periodo de clases en el Instituto tecnológico de Saltillo</p>
                <a href="" class="btn btn-danger">Leer más</a>
                </div>
            </div>
            </div>
            <div class="noticiasLateral col-md-4">
                <h2 class="text-warning">Quizás te interese...</h2>
                <h3 class="tituloLateral">Inicia nuevo ciclo Enero - Junio 2023</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minus porro eligendi recusandae suscipit voluptas ex eius. Quibusdam ad possimus debitis modi, facere, aliquid, doloremque tenetur eius sit sed ex!</p>
                
                <h3 class="tituloLateral">Se inaugura nuevo equipo de Fútbol</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minus porro eligendi recusandae suscipit voluptas ex eius. Quibusdam ad possimus debitis modi, facere, aliquid, doloremque tenetur eius sit sed ex!</p>
                
                <h3 class="tituloLateral">Remodelación de Aulas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minus porro eligendi recusandae suscipit voluptas ex eius. Quibusdam ad possimus debitis modi, facere, aliquid, doloremque tenetur eius sit sed ex!</p>
                
            </div>
        </div>
        
        <div class="noticiasTerceros">
            <div class="noticiaChica shadow">
                <img src="https://saltillo.tecnm.mx/images/anexos/complementarias.png" alt="" class="imagenChica">
                    <div class="contenidoNoticiaChica">
                        <h3 class="titutloNoticiaChica">Catálogo</h3>
                        <p>Consulta el nuevo catálogo para este ciclo Enero - Junio 2023 </p>
                        <a class="btn btn-primary">Ver más</a>
                    </div>
                </img>
            </div>
            <div class="noticiaChica shadow">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJN7nc1iC9bXZhMn8FyHVEsWG0BVMh008sg&usqp=CAU" alt="" class="imagenChica " >
                    <div class="contenidoNoticiaChica">
                        <h3 class="titutloNoticiaChica">Nuevo transporte para equipos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa quam, error esse officia obcaecati amet laboriosam perferendis aquo accusamus</p>
                        <a class="btn btn-primary">Ver más</a>
                    </div>
                </img>
            </div>
            <div class="noticiaChica shadow">
                <img src="https://desaltillo.com/wp-content/uploads/2022/05/Gorra-Guinda-ITS-Trasera-Tienda.jpg" alt="" class="imagenChica">
                    <div class="contenidoNoticiaChica">
                        <h3 class="titutloNoticiaChica">Noticia 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vero, laborum illum ut quam aut aliquid vitae eveniet nesciunt suscipit </p>
                        <a class="btn btn-primary">Ver más</a>
                    </div>
                </img>
            </div>
        </div>
    </div>
        `;
    }
}