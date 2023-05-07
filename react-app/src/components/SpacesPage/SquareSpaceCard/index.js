import './SquareSpaceCard.css'
// import ImageCard from '../ImageCard'

const SquareSpaceCard = () => {

    return(
        <div className="space">
            <div className="content-container">
              <img src= "https://m.media-amazon.com/images/I/61YXNhfzlzL.   _AC_UF894,1000_QL80_.jpg" alt="test" className='space-card-img'/>
            </div> 
            <div className="content-container text">
                <h3
                    className='primary-text'
                >
                    Space Name
                </h3>
                <p
                    className='support-text'
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptates.
                </p>
            </div>
        </div>   
    )

}

export default SquareSpaceCard