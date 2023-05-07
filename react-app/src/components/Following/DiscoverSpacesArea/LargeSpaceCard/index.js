import './LargeSpaceCard.css'


const LargeSpaceCard = ({name,image}) => {

    return(
        <div className="large-space-card-container">
            <div className="large-space-card">
                <div className="large-space-image">
                    <img className="large-spce-img" src={image} alt={name} />
                </div>
                <div className="large-space-text">
                    <h3>{name}</h3>
                </div>
            </div>   
        </div>
    )

}

export default LargeSpaceCard