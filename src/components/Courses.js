import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route
      exact
      path="/courses"
      render={() => <Redirect to="/courses/html" />}
    />
    <Route path="/courses/html" component={HTML}></Route>
    <Route path="/courses/css" component={CSS}></Route>
    <Route path="/courses/javascript" component={JavaScript}></Route>
  </div>
);

export default Courses;
