import React, { useState } from "react";
import styled from "styled-components";

class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('You have chosen wisely: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Choose an item from the Library: &nbsp;
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Items are organized by author name</option>
              <option value="https://ipfs.io/ipfs/Qme31N5Ro2WURfFLYMqaPwwcwuq2ZN6Yvww2f2Pmk7Vzkm?filename=SuperStonkGuide1.pdf">zedinstead - 6-15-21 - SuperStonkGuide #1</option>
              <option value="https://ipfs.io/ipfs/QmXmbuffwPEfeDwyE4e5J298rqofRFnE1as86Rbi9nDgUE?filename=SuperStonkGuide2.pdf">zedinstead - 6-16-21 - SuperStonkGuide #2</option>
              <option value="https://ipfs.io/ipfs/QmSapsvp9VgPYwaExiSKnjBVJPkht8iaLQW1QHUmdVq2w7?filename=SuperStonkGuide3.pdf">zedinstead - 6-17-21 - SuperStonkGuide #3</option>
              <option value="https://ipfs.io/ipfs/QmRGNn2SaJNTeRyRjwHezAmiEqLUJkBAtD22x8owbgZaXi?filename=SuperStonkGuide4.pdf">zedinstead - 6-18-21 - SuperStonkGuide #4</option>
              <option value="http://ipfs.io/ipfs/QmcHZHwK2VRgC91VkJShNmQiF7eaa1jrqrWNysxERjsiru?filename=SuperStonkGuide5.pdf">zedinstead - 6-21-21 - SuperStonkGuide #5</option>
              <option value="http://ipfs.io/ipfs/QmNsJDMSxgri8BnBqBgmYiSR9qBaVXUAzwmixeARgWzL71?filename=SuperStonkGuide6.pdf">zedinstead - 6-22-21 - SuperStonkGuide #6</option>
              <option value="http://ipfs.io/ipfs/QmRKbEQFsY47cRLT55EE6AjyejFWDD3ZG1DKaoeQyLtcrw?filename=SuperStonkGuide7.pdf">zedinstead - 6-23-21 - SuperStonkGuide #7</option>
              <option value="http://ipfs.io/ipfs/QmUCqwMpCZqWTayq2jCUx9cYF9uhgZtKP8brrAWeontqJf?filename=SuperStonkGuide8.pdf">zedinstead - 6-24-21 - SuperStonkGuide #8</option>
              <option value="https://ipfs.io/ipfs/QmRqUkPiwBuutTVg6kyLmv4auLmmiSwe7ZWT59ew2Kf7aU?filename=SuperStonkGuide9.pdf">zedinstead - 6-25-21 - SuperStonkGuide #9</option>
              <option value="">zedinstead - 6-24-21 - SuperStonkGuide #10</option>
              <option value="">zedinstead - 6-25-21 - SuperStonkGuide #11</option>
              <option value="">zedinstead - 6-26-21 - SuperStonkGuide #12</option>
              <option value="">zedinstead - 6-27-21 - SuperStonkGuide #13</option>
              <option value="">zedinstead - 6-28-21 - SuperStonkGuide #14</option>
              <option value="">zedinstead - 6-29-21 - SuperStonkGuide #15</option>
              <option value="">zedinstead - 6-16-21 - SuperStonkGuide #16</option>

            </select>
          </label>
        </form>
        <br></br>
        <iframe id="IPFS PDF LIBRARY PORTAL"
title="IPFS PDF LIBRARY PORTAL"
width="90%"
height="900"
src={this.state.value}>
</iframe>
</div>
      );
    }
  }

  export default DropDown;