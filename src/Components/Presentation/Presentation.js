import './Presentation.css'
import linkedin from './Img/174857.png';
import html from '../Technologies/Img/HtmlLogo.png'
import css from '../Technologies/Img/css.png'
import javascript from '../Technologies/Img/Js-Logo.png'
import github from '../Technologies/Img/Github.png'
function Presentation(){
    return(
        <div id="Home" class="Presentation">
            <div class="titleImg">
                <img src={html} alt="HTML"/>
                <img src={css} alt="CSS"/>
                <img src={javascript} alt="JavaScript"/>
                <h1 class="title">Elias Josue Loaiza Rincon</h1>
                <h2 class="title2">Software Engineer</h2>
                <a href="https://www.linkedin.com/in/elias-loaiza-3987031a4"><img src={linkedin} className='links' alt="linkedin"/></a>
                <a href="https://github.com/EliasLoaiza?tab=repositories"><img src={github} className='links' alt="gitHub"/></a>
            </div>
        </div>
    );
}
export {Presentation};