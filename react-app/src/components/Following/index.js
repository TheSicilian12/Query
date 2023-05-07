import './following.css'
import SpaceCardArea from '../SpaceCardArea'
import DiscoverSpaceArea from './DiscoverSpacesArea'
import ConditionalContent from '../ConditionalContent'
import content from '../../assets/conditionalContent/following.json' 
const Following = ({spaces}) => {
    return(
            <div className="following-parent-container">
                <div className="following-container">
                    <ConditionalContent className="cond-content"title = {content.title} image={content.image} message={content.message}/>
                </div>
                <div className="following-sub-container">
                    <SpaceCardArea spaces={spaces}></SpaceCardArea>
                    <div className="discover-space-container">
                        <DiscoverSpaceArea spaces={spaces} />
                    </div>
                </div>
            </div>
    )
}

export default Following