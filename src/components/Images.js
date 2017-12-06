import React, {Component} from "react";
import {connect} from "react-redux"
import {getImages} from "../redux/data/images"

class Images extends Component {
  constructor() {
    super();
    this.state = {
      bodies: ["mercury", "venus", "venus-radar", "mars", "jupiter", "moon",
        "io", "europa", "ganymede", "callisto"],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(body) {
    this.props.getImages(body)
  }

  render() {
    const styles = {
      textAlign: "center",
      button: {
        textTransform: "capitalize",
        borderRadius: "50%",
        height: "90px",
        minWidth: "90px",
        backgroundColor: "grey"
      }
    }

    const body = this.state.bodies.map((body, i) => {
      return (
        <span key={ body + i }>
          <button
            style={ styles.button }
            onClick={ () => this.handleChange(body) }>{ body }
          </button>
        </span>
      )
    })
    return(
      <div>
        <div style={ styles }>
          <h3>Select a heavenly body to view a current image.</h3>
          { body }
        </div>
        <br></br>
        {this.props.bodyImages && <img src={"http://api.usno.navy.mil/imagery/"
        + this.props.bodyImages + ".png?date=today&time=now"} alt=""/>}
        <img/>
      </div>
    )
  }
}

export default connect(state => state, { getImages })(Images);
