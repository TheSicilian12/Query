import './SpaceCardArea.css'
import SpaceCard from './SpaceCard'
import Footer from './Footer'

const SpaceCardArea = ({spaces}) => {
    return(
        <div className="space-cards-container">
            {
                spaces.map(space => {
                    return (
                        <SpaceCard 
                            name={space.name}
                            image={space.image}
                        ></SpaceCard>
                    )
                })
            }
            <hr />
            <Footer></Footer>
        </div>
    )

}

export default SpaceCardArea