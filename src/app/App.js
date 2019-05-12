import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Feed from "./components/main/feed/Feed";
import Profile from "./components/main/profile/Profile";
import People from "./components/main/people/People";
import PostSinglePage from "./components/main/singlePostPage/PostPageDetails";
import LandingPage from "./components/main/landingPage/LandingPage";
import { isAuth } from "../services/authService";

class App extends Component {
  render() {

    if (isAuth()) {
      return (
        <>
          <Header />
          <main className="container sticky-main">
            <div>
              <Switch>
                <Route path="/user/:id" component={Profile} />
                <Route path="/post/:id" component={PostSinglePage} />
                <Route path="/users" component={People} />
                <Route path="/feed/" component={Feed} />
              </Switch>
            </div>
          </main>
          <Footer />
        </>
      );
    }

    return <Route exact path='/' component={LandingPage} />

  }
}

export default withRouter(App);
