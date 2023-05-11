import { useEffect, useState } from 'react';
import './SingleQuestion.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneQuestion } from '../../store/question';
import OpenModalButton from '../OpenModalButton';
import CreateAnswerModal from '../CreateAnswerModal';
import DeleteAnswerModal from '../DeleteAnswerModal';
import EditAnswerModal from '../EditAnswerModal';
import DeleteReplyModal from '../DeleteReplyModal';
import CreateReviewForm from '../CreateReplyForm';
import { useModal } from '../../context/Modal';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const SingleQuestion = () => {
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const { closeModal } = useModal();
    const user = useSelector((state) => state.session.user)
    const answer = useSelector((state) => state.answers)
    const { question } = useSelector((state) => state.question.singleQuestion)

    const [commentVisible, setCommentVisible] = useState(false)

    useEffect(() => {
        console.log("IT IS RENDERING!");
        dispatch(getOneQuestion(questionId))
    }, [dispatch, answer, questionId, closeModal])

    if (!user) return <Redirect to="/login" />

    if (!question) return null;

    const openDeleteModal = () => {
        console.log("hi")

    }


    return (
        <div className="s-q-background">
            <div className="content-single-question">
                <div className="s-q-content-container text s-q-question-top-bottom border-radius3">
                    <h1 className='border-check s-q-width100 answer-formatter'>{question.details}</h1>
                    {user && user.id !== question.userId && <div className="s-q-answer-button">
                        <OpenModalButton
                            className="oval-button"
                            buttonText={<i class="fas fa-edit"> Answer</i>}
                            modalComponent={<CreateAnswerModal questionId={questionId} />}
                        />
                    </div>}
                </div>
                <hr />

                <div className="s-q-content-container text">
                    {
                        question.answers.map(answer => {
                            return (
                                <div className='answer-box s-q-answer-bottom border-radius3' key={answer.id}>

                                    <div className="answer-formatter s-q-answer-fontSize">
                                        <h4>
                                            {answer.details}
                                        </h4>
                                    </div>
                                    {/* See comments button */}

                                    <div className="s-q-displayFlex-row">
                                            <button className="circle-button s-q-right" onClick={() => setCommentVisible(!commentVisible)}>
                                                <i class="fa fa-regular fa-comment"> {answer.replies.length >= 1 ? answer.replies.length : null}</i>
                                            </button>
                                        <div className="s-q-right">

                                            {user && user.id === answer.ownerId && <OpenModalButton
                                                className="oval-button"
                                                buttonText="Delete Answer"
                                                modalComponent={<DeleteAnswerModal questionId={questionId} answerId={answer.id} />}
                                            />}
                                        </div>
                                        {user && user.id === answer.ownerId && <OpenModalButton
                                            className="oval-button"
                                            buttonText="Edit Answer"
                                            modalComponent={<EditAnswerModal questionId={questionId} answerId={answer.id} />}
                                        />}
                                    </div>

                                    {/* ADD A COMMENT */}
                                    <div className={commentVisible ? "" : "hidden"}>
                                        {user && <CreateReviewForm answerId={answer.id} questionId={questionId} />}
                                        {answer.replies.map(reply => {
                                            return (
                                                <div className="reply-formatter s-q-displayFlex-row border-radius3">
                                                    <div>{reply.details}</div>
                                                    {user && user.id === reply.ownerId && <OpenModalButton
                                                        className="oval-button"
                                                        buttonText="Delete Comment"
                                                        modalComponent={<DeleteReplyModal replyId={reply.id} questionId={questionId} />}
                                                    />}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleQuestion
