import React, { Component } from 'react';
import './App.css';
import Banner from './Components/banner_fol/banner.js';
import LandingView from './Components/landing';
import banner_info from './banner_info.json'
import ImageOverlay from './Components/image_overlay';

var jsonArray = [];

for (var i = 0; i < banner_info.length; i++) {
  jsonArray.push(banner_info[i]);

}



class App extends Component {


  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    imageID: '12',
    openOverlay: false,
    bannerFlip: {
      flipped: false,
      bannerID: undefined
    }
  }

  changeOverlayStatus = () => {
    this.setState({
      openOverlay: !this.state.openOverlay
    });
  }


  openFullImg = (id) => {
    if (!this.state.openOverlay) {
      this.setState({
        imageID: id,
        openOverlay: !this.state.openOverlay
      });
      this.myRef.current.startAnim();

    } else {
      this.changeOverlayStatus();
    }
  }

  bannerFlipped = (id, state) => {
    this.setState({
      bannerFlip: {
        flipped: state,
        id: id
      }
    });
  }

  render() {



    return (
      <div className="App">
        <LandingView />
        {jsonArray.map((item, i) => {
          return (
            <Banner
              key={i.toString()}
              bannerInfo={item}
              openFullImg={this.openFullImg}
              flipFunc={this.bannerFlipped}
              bannerFlip={this.state.bannerFlip}
            />
          )
        })}
        <ImageOverlay
          ref={this.myRef}
          imageID={this.state.imageID}
          openOverlay={this.state.openOverlay}
          openFullImg={this.openFullImg}
        />
      </div>
    );
  }
}


export default App;

