import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ studentInfo: response.data })
    }).catch(error => {
      console.log(error)
    })
  
  }

  goBack(){
    this.props.history.goBack();
  }

  render() {
    let { studentInfo } = this.state
    return (
      <div className="box">
        <button onClick={this.goBack}>Back</button>
        <h1>Name: {studentInfo.first_name} {studentInfo.last_name} </h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
      </div>
    )
  }
}