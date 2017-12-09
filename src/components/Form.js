import React, {Component} from "react";
import {connect} from "react-redux";
import {getLunarData} from "../redux/data";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      city: "",
      state: ""
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    //date
    let toArr = this.state.date.split("-");
    let year = toArr.splice(0, 1);
    let combinedArrays = toArr.concat(year).toString("");
    let date = combinedArrays.replace(/,/g, "/");
    //city
    let city = this.state.city;
    // state
    let state = this.state.state
    this.props.getLunarData(date, city, state)
    this.setState({ date: "",  city: "", state: ""})
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } className="form">
        <br></br>
        <label className="label">Date</label>
        <input
          type="date"
          name="date"
          value={ this.state.date }
          onChange={ this.handleInputs }
          className="input"
        />
        <br></br>
        <label className="label">Enter a city</label>
        <input
          type="text"
          name="city"
          value={ this.state.city }
          onChange={ this.handleInputs }
          className="input"
        />
        <br></br>
        <label className="label">Select a State</label>
        <select name="state" id="st" onChange={ this.handleInputs } className="input">
          <option value=""></option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AS">American Samoa</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="GU">Guam</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="MP">N. Mariana Islands</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VI">Virgin Islands</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <br></br>
        <button>Submit</button>
        <h4>{ this.props.lunarData.failure }</h4>
      </form>
    )
  }
}

export default connect(state => state , { getLunarData })(Form);
