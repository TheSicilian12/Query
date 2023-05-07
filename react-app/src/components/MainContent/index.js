import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainContent.css'
import ContentCard from './CardComponents/ContentCard'
import SpaceCardArea from '../SpaceCardArea/'
import retreiveAllQuestions from '../../store/question'
// import {getUsers} from '../../store/users'
// import { useParams } from 'react-router-dom';
const MainContent = ({seedData, spaces}) => {
    const dispatch = useDispatch();
    // const { userId } = useParams();
    // const users = useSelector(state => state)
    // console.log('USERS',users)


    useEffect(() => {
      dispatch(retreiveAllQuestions());
    }, [dispatch]);



    return(
        <div className="main-content-section">
            <div className="main-content-area">
                {/* <SpaceCardArea spaces={spaces}></SpaceCardArea> */}
            </div>
            {/* <div className="content-cards">
                {
                    seedData.map(seed => {
                    return (
                        <ContentCard seed={seed}>
                        </ContentCard>
                    )
                    })
                }
            </div> */}
            <div className="main-content-area">
                <h2>adds</h2>
                <h2>adds</h2>
                <h2>adds</h2>
            </div>
        </div>
    )
}

export default MainContent
