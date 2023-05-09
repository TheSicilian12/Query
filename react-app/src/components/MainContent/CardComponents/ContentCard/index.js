import './ContentCard.css'
import ProfileCard from '../ProfileCard'
// import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const ContentCard = ({question}) => {
    return(
        <div className="content-card-content">
            <div className="content-container">
                <ProfileCard
                    profile={question.userId}
                >
                </ProfileCard>
            </div>
            <div className="content-container text">
                <NavLink
                    to={`/questions/${question.id}`}
                >
                    <h1
                        className='primary-text'
                    >
                        {question.details}
                    </h1>
                </NavLink>
                {/* <p
                    className='support-text'
                >
                     {seed.question.details}
                </p> */}
            </div>
            {/* <div className="content-container">
                <ImageCard
                    image={seed.question.image_url}
                >
                </ImageCard>
            </div>   */}
        </div>
    )

}

export default ContentCard
