import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import MainContent from "./components/MainContent";
import SingleQuestion from "./components/SingleQuestion";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";
import Answer from "./components/Answer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/questions/:questionId">
            <SingleQuestion />
          </Route>
          <Route path="/users/:userId">
            <ProfilePage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/answer">
            <Answer />
          </Route>
          <Route path="/">
            <MainContent />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
