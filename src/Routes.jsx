import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./containers/Signup.jsx";

import AppliedRoute from "./components/AppliedRoute.jsx";
import Home from "./containers/Home";
import Login from "./containers/Login.jsx";
import NewNote from "./containers/NewNote.jsx";
import NotFound from "./containers/NotFound";
import Notes from "./containers/Notes.jsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.jsx";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute.jsx";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
	<UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
	<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
	<AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
	<AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;