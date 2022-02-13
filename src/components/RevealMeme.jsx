import React from "react";
import ReactDOM from "react-dom";import 
Meme1 from "../images/memes/Meme1.png";
import Meme2 from "../images/memes/Meme2.png";


class RevealMeme extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "../images/memes/Meme1.png",
        "../images/memes/Meme2.png"
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 1000);
  }

  render() {
    return (
      <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    );
  }
}

export default RevealMeme;