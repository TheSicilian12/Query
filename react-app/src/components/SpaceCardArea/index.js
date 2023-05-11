import './SpaceCardArea.css'
import SpaceCard from './SpaceCard'
import Footer from './Footer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpaces } from '../../store/space';

const SpaceCardArea = ({user}) => {
    const dispatch = useDispatch();
    const spaces = useSelector(state => state.space.spaces);
    const spacesArray = Object.values(spaces);
    const userSpaces = spacesArray.filter(s => s.ownerId === user.id);

    useEffect(() => {
        dispatch(getAllSpaces())
    }, [dispatch])
    
    return(
        <div className="space-cards-container">
            {
                userSpaces.map(space => {
                    return (
                        <SpaceCard
                            id={space.id} 
                            name={space.name}
                            image={space.imageUrl}
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