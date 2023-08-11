import'./projects.css';
import calculator from './photo_2023-08-10_13-05-25.jpg';
function Projects () {
        return(
            <div>
                <h1><b>Projects</b></h1>
                <div id="Projects" class="Projects">
                    <div class="Project">
                        <h1>Calculator</h1>
                        <img src={calculator} alt='Calculator'/>
                        <a href="#Projects" id="Project1"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay1">
                        <div class="popup" id="popup1"> 
                            <b><p>Page with redirection to the different 
                                sections, designed for the ELOTEC company, 
                                with information and colors of the same</p>
                            <p>LINK: <a href="https://eliasloaiza.github.io/Calculadora">https://eliasloaiza.github.io/Calculadora</a></p></b>
                            <a href="#Projects" id="btnClosePopup1" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export { Projects };