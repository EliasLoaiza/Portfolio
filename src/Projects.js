import React, { Component } from 'react';

class Projects extends Component {
    render(){
        window.onload = function(){
            var btnproject1 = document.getElementById("Project1"),
                btnproject2 = document.getElementById("Project2"),
                btnproject3 = document.getElementById("Project3"),
                btnproject4 = document.getElementById("Project4"),
                btnproject5 = document.getElementById("Project5");
            var overlay1 = document.getElementById("overlay1"),
                popup1 = document.getElementById("popup1"),
                overlay2 = document.getElementById("overlay2"),
                popup2 = document.getElementById("popup2"),
                overlay3 = document.getElementById("overlay3"),
                popup3 = document.getElementById("popup3"),
                overlay4 = document.getElementById("overlay4"),
                popup4 = document.getElementById("popup4"),
                overlay5 = document.getElementById("overlay5"),
                popup5 = document.getElementById("popup5");
            var btnClosePopup1 = document.getElementById("btnClosePopup1"),
                btnClosePopup2 = document.getElementById("btnClosePopup2"),
                btnClosePopup3 = document.getElementById("btnClosePopup3"),
                btnClosePopup4 = document.getElementById("btnClosePopup4"),
                btnClosePopup5 = document.getElementById("btnClosePopup5");
            btnproject1.onclick = function(){
                overlay1.classList.add("active");
                popup1.classList.add("active");
            };
            btnClosePopup1.onclick = function(){
                overlay1.classList.remove("active");
                popup1.classList.remove("active");
            };
            btnproject2.onclick = function(){
                overlay2.classList.add("active");
                popup2.classList.add("active");
            };
            btnClosePopup2.onclick = function(){
                overlay2.classList.remove("active");
                popup2.classList.remove("active");
            };
            btnproject3.onclick = function(){
                overlay3.classList.add("active");
                popup3.classList.add("active");
            };
            btnClosePopup3.onclick = function(){
                overlay3.classList.remove("active");
                popup3.classList.remove("active");
            };
            btnproject4.onclick = function(){
                overlay4.classList.add("active");
                popup4.classList.add("active");
            };
            btnClosePopup4.onclick = function(){
                overlay4.classList.remove("active");
                popup4.classList.remove("active");
            };
            btnproject5.onclick = function(){
                overlay5.classList.add("active");
                popup5.classList.add("active");
            };
            btnClosePopup5.onclick = function(){
                overlay5.classList.remove("active");
                popup5.classList.remove("active");
            };
        };  
        return(
            <div>
                <h1><b>Projects</b></h1>
                <div id="Projects" class="Projects">
                    <div class="Project">
                        <h1>Full Page for Elotec</h1>
                        <img src="Img/Tarea1.PNG"/>
                        <a href="#Projects" id="Project1"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay1">
                        <div class="popup" id="popup1"> 
                            <b><p>Page with redirection to the different 
                                sections, designed for the ELOTEC company, 
                                with information and colors of the same</p>
                            <p>LINK: <a href="https://github.com/EliasLoaiza/Tarea-ed-6-Secciones-DW">https://github.com/EliasLoaiza/Tarea-ed-6-Secciones-DW</a></p></b>
                            <a href="#Projects" id="btnClosePopup1" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>
                    <div class="Project">
                        <h1>Full One Page for Elotec</h1>
                        <img src="Img/Tarea2.PNG"/>
                        <a href="#Projects" id="Project2"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay2">
                        <div class="popup" id="popup2"> 
                            <b><p>Page with 6 different sections, 
                                designed for the ELOTEC company, 
                                with information and colors of the same</p>
                            <p>LINK: <a href="https://github.com/EliasLoaiza/Tarea-2-DW">https://github.com/EliasLoaiza/Tarea-2-DW</a></p></b>
                            <a href="#Projects" id="btnClosePopup2" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>

                    <div class="Project">
                        <h1>Full Page of Criptocurreny</h1>
                        <img src="Img/Tarea3.PNG"/>
                        <a href="#Projects" id="Project3"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay3">
                        <div class="popup" id="popup3"> 
                            <b><p>Full page with redirection to 
                                5 sections on cryptocurrencies 
                                with images and text connected</p>
                            <p>LINK: <a href="https://github.com/EliasLoaiza/Tarea-3-DW">https://github.com/EliasLoaiza/Tarea-3-DW</a></p></b>
                            <a href="#Projects" id="btnClosePopup3" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>
                    <div class="Project">
                        <h1>Full One Page of Style</h1>
                        <img src="Img/Tarea4.PNG"/>
                        <a href="#Projects" id="Project4"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay4">
                        <div class="popup" id="popup4"> 
                            <b><p>Full page of fashion design with 
                                5 sections with connected images and 
                                text, plus two image galleries</p>
                            <p>LINK: <a href="https://github.com/EliasLoaiza/Tarea-4-DW">https://github.com/EliasLoaiza/Tarea-4-DW</a></p></b>
                            <a href="#Projects" id="btnClosePopup4" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>
                    <div class="Project">
                        <h1>Full Page for ELias Loaiza</h1>
                        <img src="Img/Tarea5.PNG"/>
                        <a href="#Projects" id="Project5"><i class="far fa-plus-square"></i></a>
                    </div>
                    <div class="overlay" id="overlay5">
                        <div class="popup" id="popup5"> 
                            <b><p>Complete presentation page for Elias 
                                Loaiza with 4 sections with images and 
                                text, plus contact information</p>
                            <p>LINK: <a href="https://github.com/EliasLoaiza/Tarea-5-DW">https://github.com/EliasLoaiza/Tarea-5-DW</a></p></b>
                            <a href="#Projects" id="btnClosePopup5" class="btn-close-popup"><i class="far fa-times-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;