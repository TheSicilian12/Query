import normalize from './normalizer'
import { getOneQuestion } from './question';

const POST_ANSWER = "answers/new";
const LOAD = "answers/load"
const DELETE_ANSWER = "answers/delete"
const EDIT_ANSWER = "answers/edit"

const editLoad = (answer) => ({
    type: EDIT_ANSWER,
    answer
})

const load = (data) => ({
    type: LOAD,
    payload: data
})

const postAnswer = (details) => ({
    type: POST_ANSWER,
    details
});

// const deleteAnswerAction = (answerId) => ({
//     type: DELETE_ANSWER,
//     answerId
// });

//Edit answer Thunk
export const editAnswer = (data) => async (dispatch) => {
    let { answerId, item } = data
    console.log('EDIT AN ANSWER THUNK')
    console.log('answerId:', answerId)
    console.log('item: ', item)
    console.log('data: ', data)

    const response = await fetch(`/api/answers/${answerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    })
    console.log('response: ', response)
    if (response.ok) {
        console.log('Answer Thunk if statement')
        const editedAnswer = await response.json()
        console.log('editedAnswer: ', editedAnswer)
        dispatch(editLoad(editedAnswer))
    } else if (response.status < 500) {
        console.log('Answer Thunk else if statement')
        const editedAnswer = await response.json();
        console.log('After editedAnswer else if')
        console.log('editedAnswer - else if: ', editedAnswer)
        if (editedAnswer.errors) {
            return editedAnswer.errors;
        }
    } else {
        console.log('Answer Thunk else statement')
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const getAllAnswers = () => async (dispatch) => {
    //This is the get all answers Thunk
    console.log("inside gett all answers thunk")
    const response = await fetch('/api/answers')
    if (response.ok) {
        const data = await response.json();
        const allAnswers = normalize(data.answers);
        dispatch(load(allAnswers))
        return response
    }
}

export const getUserAnswers = (userId) => async (dispatch) => {
    console.log("inside get all answers thunk")
    const response = await fetch(`/api/answers/${userId}`)
    if (response.ok) {
        const data = await response.json();
        const allAnswers = normalize(data.answers);
        dispatch(load(allAnswers))
        return response
    }
}

//Create an answer Thunk
export const createAnswer = (details, questionId) => async (dispatch) => {
    //This is the create an answer Thunk
    console.log('details in create answer THUNK', details)
    const response = await fetch("/api/answers/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: details
        body: JSON.stringify(
            details
        ),
    });
    console.log("create answer thunk response", response);
    if (response.ok) {
        const data = await response.json();
        // dispatch(postAnswer(data));
        dispatch(getOneQuestion(questionId))
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

//Delete an answer Thunk
export const deleteAnswer = (ids) => async (dispatch) => {
    const {answerId, questionId} = ids
    // This deletes an answer by id
    const response = await fetch(`/api/answers/${answerId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if (response.ok) {
        dispatch(getOneQuestion(questionId));
    }
    else {
        return [
            "An error occurred. Please try again."
        ];
    }
}


const initialState = {
    answers: {},
};

const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const newState = { ...state };
            newState.answers = { ...action.payload };
            return newState;
        case POST_ANSWER:
            const postNewState = { ...state };
            postNewState.answers[action.details.answer.id] = action.details.answer;
            return postNewState;
        // case DELETE_ANSWER:
        //     const deleteNewState = {...state}
        //     delete deleteNewState[action.answerId]
        //     return deleteNewState
        case EDIT_ANSWER:
            const newEditState = { ...state };
            newEditState.answers[action.details.id] = action.details
            return newEditState
        default:
            return state;
    }
};

export default answerReducer;
