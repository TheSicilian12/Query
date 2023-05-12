import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { createQuestion } from "../../store/question";
import { useHistory } from "react-router-dom"
import './CreateQuestionModal.css'

function CreateQuestionModal({spaceId}) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [details, setDetails] = useState("");
	const currentUser = useSelector((state) => state.session.user)
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (details.length >= 10) {
			const item = {
				'details': details,
				'user_id': currentUser.id,
				'space_id': spaceId ? Number(spaceId) : 9
			}
			const data = await dispatch(createQuestion(item));
			console.log('------------------------------data', data);
			if (data) {
				closeModal();
				history.push(`/questions/${data.question.id}`)
			}
		} else {
			setErrors([
				"Question must be at least 10 characters.",
			]);
		}
	};

	return (
		<div className="create-question-container">
			<h1>Add Question</h1>
			<form
				 onSubmit={handleSubmit}
				 encType="multipart/form-data"
			>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<input
					type="text"
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					placeholder={`Start your question with "What", "How","Why", etc.`}
				/>
				<button onClick={closeModal}>Cancel</button>
				<button type="submit">Add Question</button>
			</form>
		</div>
	)

}

export default CreateQuestionModal;
