import './QuestionCard.css'


const QuestionCard = ({title, image, message}) => {

    return(
        <div className="question-card-container">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, laudantium.</h2>
            <button className="answer-button">
                Number of answers
            </button>
            <span>Last requested 10m ago</span>
            <div className="bottom-buttons">
                <div className="bottom-buttons-left">
                    <button class='oval-button'>
                        <i class="fas fa-check-square"></i>
                        Answer
                    </button>
                    <button class='oval-button' id="bare-button">
                        Follow
                    </button>
                    <button class='oval-button' id="bare-button">Add Topics</button>
                </div>
                <div className="bottom-buttons-right">
                    <button className="circle-button">
                        <i class="fas fa-arrow-circle-down"></i>
                    </button>
                    <button className="circle-button">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default QuestionCard