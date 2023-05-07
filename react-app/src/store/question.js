const POST_QUESTION = "questions/new";
const GET_ALL_QUESTIONS = "questions/";

const getAllQuestions = (questions) => ({
    type: GET_ALL_QUESTIONS,
    questions
});

const postQuestion = (details) => ({
    type: POST_QUESTION,
    details
});


export const retreiveAllQuestions = () => async (dispatch) => {
    console.log('All Question THUNK')
    const response = await fetch("/api/questions")
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllQuestions(data))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const createQuestion = (details) => async (dispatch) => {
    console.log('details in THUNK',details)
    const response = await fetch("/api/questions/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: details
        // body: JSON.stringify({
        //     details
        // }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(postQuestion(data));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

const initialState = { questions: {} };

export default function questionReducer(state = initialState, action) {
    console.log('action.type: ', action)
    // console.log('hello')
	switch (action.type) {
		case POST_QUESTION:
            const post_newState = { ...state };
            post_newState.questions[action.details.id] = action.details;
            return post_newState;
        case GET_ALL_QUESTIONS:
            console.log('get all questions reducer')
            const get_all_newState = { ...state };
            get_all_newState.questions = action.questions
            return get_all_newState
		default:
			return state;
	}
}
