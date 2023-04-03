import React from 'react';
import { Component } from 'react';

export class Button extends Component {
  render() {

    const { handleLoadMore } = this.props

    return (
      <div className='Button-more'>
        <button className="Button" onClick={handleLoadMore}>Load More</button>
      </div>
    );
  }
}
