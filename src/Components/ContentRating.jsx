
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleClear:() => {
        this.setState((prevState) => ({
            ikes: prevState.likes = 0,
          dislikes: prevState.dislikes = 0,
          totalRatings: prevState.totalRatings = 0
        }));
      }
    }
   }

  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
          What did one snowman say to the other snowman? 
          It smells like carrots over here!
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
        </button>   
        <p>Total Ratings: {this.state.totalRatings}</p>
        <button className="clear-button" onClick={this.state.handleClear}>
            Clear 
          </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
