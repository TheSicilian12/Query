import LoginFormPage from "../LoginFormPage"
import SignupFormPage from "../SignupFormPage"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
// import splashBackground from "../../assets/images/splash-page-background.jpg"
import "./SplashPage.css"

function SplashPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) return <Redirect to="/home" />;

    const handleClick = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'));
    }

    return (

            <div className="splash-background">
                <div className="splash-page-container white-background">
                    <h1 className="query quora-font">Query</h1>
                    <h2 className="mission-statement">A place to share knowledge and better understand the world</h2>
                    <div className="login-signup-container">
                        <div className="width-fifty">
                            <div className="signup-splash-page">
                                <SignupFormPage />
                            </div>
                        </div>
                        <div className="width-fifty right-side">
                            <div className="login-splash-page">
                                <LoginFormPage />
                                <div className="splash-page-demo-button">
                                    <button className="oval-button" onClick={handleClick}>Demo User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}


export default SplashPage;
