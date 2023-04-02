import axios from 'axios';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=33188868-874ed4f4ba7cc47db513adf3f';

export class App extends Component {
  state = {
    images: [],
    search: '',
  };

  async componentDidMount() {
    const response = await axios.get('&per_page=12');
    this.setState({ images: response.data.hits });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      const response = await axios.get(`&q=${this.state.search}&per_page=12`);
      this.setState({ images: response.data.hits });
    }
  }

  /*   async shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      const response = await axios.get(`${this.state.search}`);
      this.setState({ images: response.data.hits });
      console.log(response)
      console.log(this.state)
    }
  } */

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
    this.setState({ search: input });
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state);
  };

  handleClick = event => {

  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <ImageGallery images={this.state.images}></ImageGallery>
      </div>
    );
  }
}
