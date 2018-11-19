import React from 'react'

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";
    this.audio = new Audio(this.url);
    this.playMusic = this.playMusic.bind(this)
    this.pauseMusic = this.pauseMusic.bind(this)
  }

  playMusic() {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }

  pauseMusic() {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }

  render() {

  return (
    <div>
      <button onClick={this.playMusic}>Play</button>
      <button onClick={this.pauseMusic}>Pause</button>
    </div>
    );
  }
}

export default Music;
