import React, {Component} from "react";
import Form from "./Form";

import {connect} from "react-redux";
import {getLunarData} from "../redux/data";

class LunarData extends Component {

  componentDidMount() {
    this.props.getLunarData(this.state);
  }

  render() {
    const moonData = this.props.lunarData.moondata.map((data, i) => {
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

    const sunData = this.props.lunarData.sundata.map((data, i) => {
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
                  <th></th>
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
        <p>{ this.props.lunarData.city }, { this.props.lunarData.state }</p>
        <table>
          <tbody>
            <tr>
              <th colSpan="6">Moon Data</th>
            </tr>
            <tr>
              <td>{ moonData }</td>
            </tr>
            <tr>
              <th colSpan="6">Sun Data</th>
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

export default connect(state => state, { getLunarData })(LunarData);
