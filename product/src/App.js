import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import DatePicker from "react-date-picker";

export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Form />
      </div>
    );
  }
}
