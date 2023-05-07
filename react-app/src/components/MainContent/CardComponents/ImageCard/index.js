import './ImageCard.css'

const ImageCard = ({image}) => {

    return (
        <div className="image-container">
            <img 
                src={image} 
                alt="blue-eyes-white-dragon" 
                className='modular-image'
            />
        </div> 
    )

}

export default ImageCard