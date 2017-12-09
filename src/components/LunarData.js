import React, {Component} from "react";
import Form from "./Form";

import {connect} from "react-redux";
import {getLunarData, initialLoad} from "../redux/data";

class LunarData extends Component {

  // componentDidMount() {
  //   this.props.initialLoad(this.state);
  // }

  componentWillMount() {
    document.body.style.backgroundImage = 'url("https://rajusudhakar.files.wordpress.com/2016/09/sun-and-moon.jpg")'
  }

  render() {
    const view = this.props.lunarData
    const moonData = view.moondata.map((data, i) => {
      switch (data.phen) {
        case "R":
          return (
            <table key={ data.time + i }>
              <tbody>
                <tr>
                  <td>Rise</td>
                  <td>{ data.time }</td>
                </tr>
              </tbody>
            </table>
          )
        case "S":
          return (
            <table key={ data.time + i }>
              <tbody>
                <tr>
                  <td>Set</td>
                  <td>{ data.time }</td>
                </tr>
              </tbody>
            </table>
          )
        default:
          return null;
      }
    })

    const sunData = view.sundata.map((data, i) => {
      switch (data.phen) {
        case "R":
          return (
            <table key={ data.time + i }>
              <tbody>
                <tr>
                  <td>Rise</td>
                  <td>{ data.time }</td>
                </tr>
              </tbody>
            </table>
          )
        case "S":
          return (
            <table key={ data.time + i }>
              <tbody>
                <tr>
                  <td>Set</td>
                  <td>{ data.time }</td>
                </tr>
              </tbody>
            </table>
          )
        default:
          return null;
      }
    })

    return(
      <div>
        <Form />
        <h3>{ view.dayofweek } { view.month }{ view.day && "/"}{ view.day }{ view.day && "/"}{ view.year }</h3>
        <h3>{ view.city }{ view.city && ","} { view.state }</h3>
        <h3>{ view.day && "Latitude" } { view.lat } { view.day && "Longitude" } { view.lon }</h3>
        <table className="moonData">
          <tbody>
            <tr>
              <th>Moon Data</th>
            </tr>
            <tr>
              <td>{ moonData }</td>
            </tr>
          </tbody>
        </table>
        <table className="sunData">
          <tbody>
            <tr>
              <th>Sun Data</th>
            </tr>
            <tr>
              <td>{ sunData }</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(state => state, { getLunarData, initialLoad })(LunarData);
