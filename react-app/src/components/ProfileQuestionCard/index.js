import './QuestionCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import OpenModalButton from '../OpenModalButton';
import EditQuestionModal from '../EditQuestionModal';
import { getAllAnswers } from '../../store/answer.js '

const ProfileQuestionCard = ({ question, user }) => {
    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(true)
    const answers = useSelector((state) => state.answer.answers);
    const answersArray = Object.values(answers);
    const questionAnswers = answersArray.filter(a => a.questionId === question.id);

    useEffect(() => {
        dispatch(getAllAnswers())
    }, [dispatch])

    const handleClick = () => {
        setIsHidden(!isHidden)
    }

    let editQuestionTool = isHidden ? 'hidden' : 'edit-question-tooltip';

    return (
        <div className="question-card-container">
            <div className="question-card">
                <div className="question-text">
                    <h3>{question.details}</h3>
                </div>
            </div>
            <div className="question-answers">
                {questionAnswers.length ?
                    (questionAnswers.length === 1 ?
                        (
                            <span>{questionAnswers.length} answer</span>
                        )
                        :
                        (
                            <span>{questionAnswers.length} answers</span>
                        )
                    )
                    :
                    (
                        <span>No answers yet</span>
                    )
                }
            </div>
            <div className="edit-question-button">
                <button
                    className="circle-button"
                    onClick={handleClick}
                >
                    <i className="fas fa-ellipsis-h"></i>
                </button>
                <div className="edit-question-tooltip-container">
                    <div className={editQuestionTool}>
                        <OpenModalButton
                            buttonText="Edit question"
                            modalComponent={
                                <EditQuestionModal 
                                    question={question}
                                />
                            }
                        />
                        <button>Delete question</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileQuestionCard
