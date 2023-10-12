import {Component} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery"
import {ButtonLoadMore} from "./ButtonLoadMore/ButtonLoadMore"
import {fetchImages} from "./api"
import { Audio } from 'react-loader-spinner'
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: false,
    q: '', // те по чому я роблю запит
    page:1,
  }
 handlerSubmit = evt => {
   evt.preventDefault();
   this.setState(this.state.q);
  }
  // async componentDidMount() {
  //   try {
        
  //       const galleryImages = await fetchImages();
      
  //       this.setState({ images: galleryImages })
        
  //    } catch (error) {
       
  //    }
  // }
  
   async componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q
      || prevState.page !== this.state.page) {
      //запит з setState
      try {
        this.setState({ loading: true });
        const galleryImages = await fetchImages();
        
        this.setState({ images: galleryImages })
        
        this.setState({ loading: false });
     } catch (error) {
       
     }
     }

     
  }

  handlerLoadMore = () => {
    this.setState(prevState => prevState +1)
  }

//  handlerChange = newQuery => {
//     this.setState({
//       query: newQuery,
//     })
//   }


  render() {
    const {images, query, loading } = this.state;
    return (
    <Layout>
        <Searchbar value={query} onSubmit={this.handlerSubmit} />
     {loading && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>} 
        {this.state.images.length > 0 && <ImageGallery gallery={images} />} 
    
      <ButtonLoadMore onClick = {this.handlerLoadMore} />
      {/* <Modal/> */}
    </Layout>
  );
  }
  
};
