import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevCounter: 0,
      nextCounter: 0,
      nextFlag: null,
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch("https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  prevImage = () => {
    let { prevCounter, nextCounter, nextFlag } = this.state;
    const el = document.getElementById("carousel");
    let childIndex;
    
    if (prevCounter < 0) {
      this.setState({
        prevCounter: prevCounter+1,
        nextCounter: nextCounter-1
      });

      nextFlag ? childIndex = nextCounter-1 : childIndex = prevCounter*(-1);

      el.children[childIndex].style.display = "inline-block"; //*(-1) to remove negative sign
    }
  }

  nextImage = () => {
    let {prevCounter, nextCounter} = this.state;
    const el = document.getElementById("carousel");
    
    if (nextCounter+1 < el.childElementCount) { //+1 to keep minimum 1 deck
      this.setState({
        nextCounter: nextCounter+1,
        prevCounter: prevCounter-1,
        nextFlag: true
      });

      el.children[nextCounter].style.display = "none";
    }
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="app">
          <header className="app-header">
            <h1>Carousel Test</h1>
          </header>
          <ul id="carousel">
            {
              data.hits.map( (item, index) => {
                return (
                  <li key={index}>
                    <img src={item.webformatURL} alt={item.tags} />
                    <div class="imgName">Image {index+1}</div>
                  </li>
                )
              })
            }
          </ul>
        <div className="button-wrapper">
            <button className="prev-next-button previous" onClick={this.prevImage}>
              <span className="button-text">Prev</span>
            </button>

            <button className="prev-next-button next" onClick={this.nextImage}>
              <span className="button-text">Next</span>
            </button>
        </div>
        </div>
      );
    }
  }
}

export default Home;
