const POST_REPLY = "replies/new"
const DELETE_REPLY = "replies/delete"

const postReply = (details) => ({
    type: POST_REPLY,
    details
})

const deleteReplyAction = (replyId) => ({
    type: DELETE_REPLY,
    replyId
});


export const createReply = (details) => async (dispatch) => {
    console.log("reply details in thunk", details);
    const response = await fetch("/api/replies/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: details
        body: JSON.stringify(
            details
        ),
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(postReply(data));
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

// Delete a reply Thunk
export const deleteReply = (replyId) => async (dispatch) => {
    // This deletes an answer by id
    const response = await fetch(`/api/replies/${replyId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if (response.ok) {
        dispatch(deleteReplyAction(replyId));
    }
    else {
        return [
            "An error occurred. Please try again."
        ];
    }
}


const initialState = {
    replies: {},
};

const ReplyReducer = (state = initialState, action) => {
    switch (action.type) {
        // case LOAD:
        //     const newState = { ...state };
        //     newState.answers = { ...action.payload };
        //     return newState;
        case POST_REPLY: {
            const newState = { ...state };
            newState.replies[action.details.reply.id] = action.details.reply;
            return newState;
        }
        case DELETE_REPLY: {
            const newState = {...state}
            delete newState[action.replyId]
            return newState
        }
        default:
            return state;
    }
};

export default ReplyReducer;