import './ContentCard.css'
import ProfileCard from '../ProfileCard'
import ImageCard from '../ImageCard'

const ContentCard = ({seed}) => {

    return(
        <div className="content">
            <div className="content-container">
                <ProfileCard 
                    profile={seed.profile}
                >
                </ProfileCard>
            </div> 
            <div className="content-container text">
                <h1
                    className='primary-text'
                >
                    {seed.question.question}
                </h1>
                <p
                    className='support-text'
                >
                     {seed.question.details}
                </p>
            </div>
            <div className="content-container">
                <ImageCard 
                    image={seed.question.image_url}
                >
                </ImageCard>
            </div>  
        </div>   
    )

}

export default ContentCard