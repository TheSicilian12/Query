import './ConditionalContent.css'


const ConditionalContent = ({title, image, message}) => {

    return(
        <div className="conditional-card-container">
            <div className="conditional-card">
                <div className="conditional-image">
                    <img className="spce-img" src={image} alt={title} />
                </div>
                <div className="conditional-text">
                    <h3>{title}</h3>
                    <p>{message}</p>
                </div>
            </div>   
        </div>
    )

}

export default ConditionalContent