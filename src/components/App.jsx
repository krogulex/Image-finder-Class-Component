import axios from 'axios';
import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from './Button/Button';

axios.defaults.baseURL =
  'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    search: '',
    isLoading: false,
    page: 1,
  };

  fetchImages = async (search, page) => {
    try {
      const response = await axios.get(`?key=33188868-874ed4f4ba7cc47db513adf3f&q=${search}&per_page=4&page=${page}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  loadImages = () => {
    const { search, page } = this.state;

    this.setState({ isLoading: true });

    this.fetchImages(search, page)
      .then(images => {
        console.log(images.data.hits);
        this.setState(prevState => ({
          images: [...prevState.images, ...images.data.hits],
        }));
        console.log(this.state)
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  //Component Update
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search && this.state.search !== '') {
      this.setState({ images: [], page: 1 });
      this.loadImages();
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.loadImages();
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

/*   async componentDidMount() {
    this.loadImages();
  } */

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
    this.setState({ search: input });
  };

  render() {

    console.log(this.state)

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
            <Button handleLoadMore={this.handleLoadMore}></Button>
          </div>
        )}
      </div>
    );
  }
}
