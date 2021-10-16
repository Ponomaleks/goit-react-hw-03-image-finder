import './App.css';
import { Component } from 'react';

import Searchbar from './Components/Searchbar/Searchbar';
import API from './Servises/API';
import ImageGalleryItem from './Components/ImageGalleryItem';

class App extends Component {
  state = {
    req: 'cat',
    page: 1,
    images: [],
  };

  handleSubmit = request => {
    this.setState({ req: request, page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.req !== this.state.req) {
      this.searchImages();
    }
  }

  searchImages = () => {
    this.setState({ images: API(this.state.req, this.state.page).hits });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGalleryItem />
      </div>
    );
  }
}

export default App;
