function TechnologieItem({name, experience, img}){
    const TechnologieStyle = {
        backgroundImage: `url(${img})`,
    }
    return(
        <div>
            <div class="Technologie" style={TechnologieStyle}>
                <div className="text">
                    <h1>{experience}</h1>
                </div>
            </div>
        </div>
    );
}
export {TechnologieItem}