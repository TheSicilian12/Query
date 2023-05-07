import './Answer.css'
import QuestionCard from './QuestionCard'

const Answer = ({title, image, message}) => {

    return(
        <>
            <div className="main-content-section">
                <div className="main-content-area">
                    <div className="content">
                        <div className="question-content-container">
                            <h1>Questions</h1>
                        </div> 
                    </div>   
                </div>
                <div className="main-content-area">
                    <div className="content">
                        <div className="question-content-container">
                        <i class="fa-solid fa-star-sharp"></i>
                            <h1>Questions for you</h1>
                            <QuestionCard/>
                        </div> 
                    </div>   
                </div>
                <div className="main-content-area">
                    <div className="content">
                        <div className="question-content-container">
                            <h1>Topics you know about</h1>
                        </div> 
                        <div className="content">
                            <div className="question-content-container" id="mailbox-container">
                                <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="mailbox" className="mailbox"/>
                                <h2>No topics yet</h2>
                                <p>You’ll get better questions if you add more specific topics.</p>
                                <button class='circle-button'>Add Topics</button>
                            </div> 
                        </div>   
                    </div>   
                </div>
            </div>
        </>
    )

}

export default Answer