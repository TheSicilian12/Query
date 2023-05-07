import './ProfileCard.css'

const ProfileCard = ({profile}) => {
// {console.log(profile)}
    return(
        <div className="profile-container">
            <div className="profile-img-container">
                <img 
                    src={profile.image_url} 
                    alt="blue-eyes-white-dragon" 
                    className='profile-img'
                />
            </div>
            <div className="profile-info">
                <div className="profile-section one">
                    <h2 className="profile-name">
                        {profile.first_name + ' ' + profile.last_name}
                    </h2>
                    <div className="dot-button">
                        <div className="profile-divider">
                            <i class="fas fa-circle" id="dot"></i>
                        </div>
                        <button className='follow-button'>
                            Follow
                        </button>
                    </div>
                </div>
                <div className="profile-section two">
                    <h3 className="profile-title">
                        {profile.title}
                    </h3>
                    <div className="profile-divider">
                        <i class="fas fa-circle" id="dot"></i>
                    </div>
                    <button className='age-button'>
                        3y
                    </button>
                </div>
            </div>
        </div> 
    )

}

export default ProfileCard