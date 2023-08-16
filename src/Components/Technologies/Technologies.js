import { TechnologieItem } from './Technologie/TechnologieItem';
import './technologies.css';

function Technologies() {
    const TechnologiesList = [
        {name: 'HTML', experience: 'Junior Level', img: require('./Img/HtmlLogo.png')},
        {name: 'JavaScript', experience: 'Junior Level', img: require('./Img/Js-Logo.png')},
        {name: 'Git', experience: 'Junior Level', img: require('./Img/GIt.png')},
        {name: 'CSS', experience: 'Junior Level', img: require('./Img/css.png')},
        {name: 'Node.Js', experience: 'Junior Level', img: require('./Img/nodsjs2.png')},
        {name: 'React.js', experience: 'Junior Level', img: require('./Img/react.png')},
    ]
        return (
            <div>
                <h1 className='tittles'><b>Technologies</b></h1>
                <div id="Technologies" class="Technologies">
                {TechnologiesList.map(Technologie => (
                    <TechnologieItem name={Technologie.name} experience={Technologie.experience} img={Technologie.img}/>
                ))}
                </div>
            </div>
        );
}
export {Technologies} ;