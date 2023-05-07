import './SpaceCard.css'


const SpaceCard = ({name,image}) => {

    return(
        <div className="space-card-container">
            <div className="space-card">
                <div className="space-image">
                    <img className="spce-img" src={image} alt={name} />
                </div>
                <div className="space-text">
                    <h3>{name}</h3>
                </div>
            </div>   
        </div>
    )

}

export default SpaceCard