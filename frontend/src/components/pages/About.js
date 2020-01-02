import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="jumbotron">
        <h1 className="display-4">About this app</h1>
        <p className="lead">This is a shopping list</p>
        <Link className="btn btn-primary btn-lg" to="/" role="button">Back Home</Link>
      </div>
    )
}

export default About
