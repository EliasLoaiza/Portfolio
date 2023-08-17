import { createPortal } from "react-dom";
import './Modal.css';
function Modal ({setModalState}){
    return createPortal(
        <div className="overlay"> 
            <div className="Modal">
                <p>React Basic Project using useState</p>
                <p>LINK:</p>
                <a href="https://eliasloaiza.github.io/Calculadora">https://eliasloaiza.github.io/Calculadora</a>
                <button className='btnCloseModal' onClick={() => setModalState(false)}>Close</button>
            </div>
        </div>,
        document.getElementById('Modal')
    );
}
export {Modal};