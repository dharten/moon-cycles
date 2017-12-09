import React, {Component} from "react";

import {connect} from "react-redux";
import {getPhaseData} from "../redux/data/phases";
import {initialLoad} from "../redux/data";

class Phases extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      nump: ""
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.initialLoad(this.state);
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentWillMount() {
    document.body.style.backgroundImage = 'url("http://api.usno.navy.mil/imagery/moon.png?date=today&time=now")'
  }

  handleSubmit(e) {
    e.preventDefault();
    let toArr = this.state.date.split("-");
    let year = toArr.splice(0, 1);
    let combinedArrays = toArr.concat(year).toString("");
    let date = combinedArrays.replace(/,/g, "/");
    this.props.getPhaseData(date)
    this.setState({ date: "", nump: ""})
  }

  render() {
    const view = this.props.phaseData
    const phaseData = view.phasedata.map((phase, i) => {
      return (
        <table key={ phase.time + i }>
          <tbody>
            <tr>
              <th>Phase</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>{ phase.phase }</td>
              <td>{ phase.date }</td>
              <td>{ phase.time }</td>
            </tr>
          </tbody>
        </table>
      )
    })
    return(
      <div>
        <h4>{ this.props.lunarData.fracillum }</h4>
        <form onSubmit= { this.handleSubmit } className="form">
          <label className="label">Date</label>
          <input
            type="date"
            name="date"
            value={ this.state.date }
            onChange={ this.handleInputs }
          />
          {/* <input
            type="number"
            name="nump"
            value={ this.state.nump }
            onChange={ this.handleInputs }
          /> */}
          <button>Submit</button>
        </form>
        <p>{ view.month } { view.day } { view.year }</p>
        { phaseData }
      </div>
    )
  }
}

export default connect(state => state, { getPhaseData, initialLoad })(Phases);
