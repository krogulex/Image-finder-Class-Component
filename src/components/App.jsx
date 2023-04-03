import axios from 'axios';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from './Button/Button';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=33188868-874ed4f4ba7cc47db513adf3f';

export class App extends Component {
  state = {
    images: [],
    search: '',
    isLoading: false,
    page: 1,
  };

  fetchImages = async (search, page) => {
    try {
      const response = await axios.get(
        `&q=${search}&per_page=4&page=${page}`
      );
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  loadImages = () => {
    const { search, page } = this.state;

    this.setState({ isLoading: true });

    this.fetchImages(search, page)
    .then (images => {
      console.log(images.data.hits)
      this.setState({ images: images.data.hits });
    })
    .catch(error => console.log(error))
    .finally(() => this.setState({ isLoading: false }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.loadImages()
    }
  }
  handleLoadMoreImages = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }))

  }
/*   async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    setTimeout(async () => {
      const response = await this.fetchImages(
        this.state.search,
        this.state.page
      ).then(() => {
        console.log(response);
        this.setState({ images: response.data.hits });
        this.setState({
          isLoading: false,
        });
      });
    }, 1000);
  } */

  async componentDidMount() {
    this.loadImages()
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
    this.setState({ search: input });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        {this.state.isLoading === true ? (
          <div className="Spinner">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#3f51b5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <div>
            <ImageGallery images={this.state.images}></ImageGallery>
{/*             <Button></Button> */}
          </div>
        )}
      </div>
    );
  }
}
