import './ProfilePage.css'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect} from 'react';
import { getAllQuestions } from '../../store/question';
// import ProfileQuestionCard from '../ProfileQuestionCard';
import ProfileQuestionCard from '../ProfileQuestionCard';

function ProfilePage() {
    const sessionUser = useSelector((state) => state.session.user);
    const questions = useSelector((state) => state.question.questions);
    const questionsArray = Object.values(questions);
    const userQuestions = questionsArray.filter(q => q.userId === sessionUser.id);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllQuestions())
    }, [dispatch, sessionUser])

    if(!questions) return null

    return (
        <div className="profile-page-container">
            <h1>{sessionUser.username}</h1>
            {
                userQuestions.map(question => {
                    return (
                        <ProfileQuestionCard
                            key={question.id}
                            question={question}
                            user={sessionUser}
                        />
                    )
                })
            }
        </div>
    )

}

export default ProfilePage
