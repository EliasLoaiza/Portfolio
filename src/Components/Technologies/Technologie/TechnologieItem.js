function TechnologieItem({name, experience, img}){
    const TechnologieStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: 'rgb(211, 211, 211)',
        boxShadow: '1px 1px 6px black',
        borderRadius: '5%',
        width: '80%'
    }
    return(
        <div>
            <div class="Technologie" style={TechnologieStyle}>
                <h1>{name}</h1>
                <p>{experience}</p>
            </div>
        </div>
    );
}
export {TechnologieItem}