import './DiscoverSpaceArea.css'
import LargeSpaceCard from './LargeSpaceCard'
const DiscoverSpaceArea = ({spaces}) => {
    return(
        <div className="discover-spaces-container">
            {
                spaces.map(space => {
                    return (
                        <LargeSpaceCard 
                            name={space.name}
                            image={space.image}
                        ></LargeSpaceCard>
                    )
                })
            }
        </div>
    )
}

export default DiscoverSpaceArea