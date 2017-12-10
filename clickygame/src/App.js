import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Grid/Container"; 
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import ImageContainer from "./components/ImageContainer";

const imageSrc = ["http://www.omega-level.net/wp-content/uploads/2017/10/wonder-woman-2-filming-summer-2018.jpg", 
"https://static.comicvine.com/uploads/scale_small/11/113509/4693444-6164752601-ben_a.jpg",
"https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125",
"http://prodimage.images-bn.com/pimages/0190526000377_p0_v1_s1200x630.jpg",
"https://i.pinimg.com/736x/1d/19/86/1d198665331909b115867a0e490e3000--man-suit-ironman.jpg",
"http://screencrush.com/files/2016/06/Green_Lantern_Hal_Jordan_Ryan_Reynolds.png?w=630&amp;h=410&amp;zc=1&amp;s=0&amp;a=t&amp;q=89",
"https://i.ytimg.com/vi/UYDBe9lrvnU/maxresdefault.jpg",
"https://the-peak.ca/wp-content/uploads/2016/06/Captain-America-%E2%80%93-bustle.com_.jpg",
"https://nerdist.com/wp-content/uploads/2017/04/deadpool-2-featured-image-04222017.jpg",
"https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/equzpeuxyzdjjucmtcqe/hugh-jackman-as-wolverine-the-wolverine-credit-fox.jpg",
"https://pmcdeadline2.files.wordpress.com/2017/10/venom-0.jpg?w=446&h=299&crop=1",
"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/df/Thor-2.jpg/revision/latest/scale-to-width-down/250?cb=20151026230045"
]

class App extends Component {

//setting initial state for stateful component
  state = {
    score: 0,
    topScore: 0
  }

  shuffle = array => {
    let i = 0
      , j = 0
      , temp = null
    
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  };

  handleImgClick = () => {
    this.setState({
      score: this.state.score + 1
    })

    this.shuffle(imageSrc);
  };


  
  render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron/>
        <br/>
        <br/>
        <Row>
          <Col size="lg-6">
            <ImageContainer src={imageSrc[0]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[1]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[2]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[3]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[4]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[5]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[6]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[7]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[8]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[9]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[10]} onClick={this.handleImgClick}/>
            <ImageContainer src={imageSrc[11]} onClick={this.handleImgClick}/>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
