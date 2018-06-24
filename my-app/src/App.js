import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  // Set the cards to have a starting state
  state = {
    cards,
    score: 0,
    topscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.topscore) {
          this.setState({topscore: this.state.score},  function () {});
        }
          this.state.cards.forEach(card => {card.count = 0;});
          alert(`Try Again :( \nscore: ${this.state.score}`);
          this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((card, click) => {
      if (card.id === id) {
        if(cards[click].count === 0){
          cards[click].count = cards[click].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Display Cards
  render() {
    return (
      <div>
      <Header>
        <Navbar score={this.state.score} topscore={this.state.topscore}></Navbar>
        <h1>Clicky Game</h1>
        <h3>Click on an image to earn points, but don't click on any more than once!</h3>
      </Header>
      <Wrapper>
        
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
      <Footer/>
      </div>
    );
  }
}

export default App;
