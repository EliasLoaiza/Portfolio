import'./projects.css';
import calculator from './Img/Calculator.jpg';
import { Modal } from './Modal/Modal';
import React from 'react';
function Projects () {
const [ModalState, setModalState] = React.useState(false);
        return(
            <div id="Projects">
                <h1 className='tittles'><b>Projects</b></h1>
                <div class="Projects">
                    <div class="Project">
                        <h1>Calculator</h1>
                        <img src={calculator} alt='Calculator'/>
                        <button className='btnInformation' onClick={() => setModalState(true)}>More information</button>
                        {ModalState && (
                            <Modal setModalState = {setModalState}/>
                        )}
                    </div>
                </div>
            </div>
        );
}
export { Projects };