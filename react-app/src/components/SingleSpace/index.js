import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneSpace } from '../../store/space';
import OpenModalButton from '../OpenModalButton';
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DeleteSpaceModal from '../DeleteSpaceModal';
import { getAllAnswers } from '../../store/answer';
import CreateQuestionModal from '../CreateQuestionModal';
import './SingleSpace.css'

const SingleSpace = () => {
    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(true)
    const { spaceId } = useParams();
    const sessionUser = useSelector((state) => state.session.user)
    const { space } = useSelector((state) => state.space.singleSpace)
    const answers = useSelector((state) => state.answer.answers)
    const answersArray = Object.values(answers)

    useEffect(() => {
        dispatch(getOneSpace(spaceId));
        dispatch(getAllAnswers())
    }, [dispatch, spaceId])

    const handleClick = () => {
        setIsHidden(!isHidden)
    }

    if (!sessionUser) return <Redirect to="/login" />

    if (!space) return null;

    let editQuestionTool = isHidden ? 'hidden' : 'edit-question-tooltip';


    return (
        <div className='single-space-container'>
            <div className="single-space-banner">
                <div className="gradient-box">
                    <div className='single-space-image-container'>
                        <img src={space.imageUrl} className='single-space-image'></img>
                    </div>
                    <div className="single-space-description">
                        <h1 className='single-space-title'>{space.name}</h1>
                        <p className='single-space-support-text'>{space.description}</p>
                    </div>
                </div>
                <div className="edit-space-button">
                    <button
                        className="circle-button"
                        onClick={handleClick}
                    >
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                    <div className="edit-question-tooltip-container">
                        <div className={editQuestionTool}>
                            <button className='edit-space-placeholder'>
                                Edit space
                            </button>
                            <OpenModalButton
                                buttonText="Delete space"
                                modalComponent={
                                    <DeleteSpaceModal
                                        id={space.id}
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="add-space-question-button">
                <OpenModalButton
                    buttonText="Add a Question to this Space"
                    modalComponent={<CreateQuestionModal spaceId={spaceId} />}
                    className="oval-button"
                />
            </div>
            <div className='single-space-questions-container'>
                {
                    space.questions.map(question => {
                        return (
                            <div className="single-space-question-container">
                                <NavLink
                                    to={`/questions/${question.id}`}
                                    className="single-space-question-link"
                                >
                                    {question.details}
                                </NavLink>
                                <div className="single-space-answers">
                                    {answersArray.filter(a => a.questionId === question.id).length ?
                                        (answersArray.filter(a => a.questionId === question.id).length === 1 ?
                                            (
                                                <span>{answersArray.filter(a => a.questionId === question.id).length} answer</span>
                                            )
                                            :
                                            (
                                                <span>{answersArray.filter(a => a.questionId === question.id).length} answers</span>
                                            )
                                        )
                                        :
                                        (
                                            <span>No answers yet</span>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default SingleSpace;
