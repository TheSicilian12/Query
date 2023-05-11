import './SpacesPage.css'
import SquareSpaceCard from './SquareSpaceCard'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpaces } from '../../store/space';
import CreateSpaceModal from '../CreateSpaceModal';
import SpaceCard from '../SpaceCardArea/SpaceCard';
import OpenModalButton from '../OpenModalButton';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const SpacesPage = () => {
    const dispatch = useDispatch();
    const spaces = useSelector((state) => state.space.spaces);
    const sessionUser = useSelector((state) => state.session.user)
    const spacesArray = Object.values(spaces)
    const userSpaces = spacesArray.filter((s) => s.ownerId == sessionUser?.id);

    useEffect(() => {
        dispatch(getAllSpaces())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/login" />

    const handleClick = () => {
        alert('Feature coming soon')
    }

    return (
        <div className="spaces-container">
            <div className="spaces-banner">
                <div className="spaces-banner-buttons">
                    <div className="spaces-text">
                        <h3>Welcome to Spaces!</h3>
                        <p>Create a space to add questions about a topic you are interested in.</p>
                    </div>
                    <div className="spaces-buttons">
                        <OpenModalButton
                            modalComponent={<CreateSpaceModal/>}
                            buttonText="Create a Space"
                            className="oval-button"
                        />
                        <button
                            className="oval-button"
                            onClick={handleClick}
                        >
                            Discover Spaces
                        </button>
                    </div>
                </div>
                <div className="user-spaces">
                    {userSpaces.length ?
                        userSpaces.map(space => {
                            return (
                                <SpaceCard
                                    id={space.id}
                                    name={space.name}
                                    image={space.imageUrl}
                                ></SpaceCard>
                            )
                        })
                        :
                        <div className="no-user-spaces">
                            Spaces you Create will show up here
                        </div>
                    }
                </div>
            </div>
            <div className="square-space-card-container">
                {
                    spacesArray.map(space => {
                        return (
                            <SquareSpaceCard space={space} />
                        )
                    })
                }
            </div>
            <button
                className='view-more'
                onClick={handleClick}
            >
                view more
                <i class="fas fa-caret-down"></i>
            </button>
        </div>
    )
}

export default SpacesPage
