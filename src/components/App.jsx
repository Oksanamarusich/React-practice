import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import {ButtonLoadMore} from "./ButtonLoadMore/ButtonLoadMore"
import { fetchImages } from 'components/services/api';

import { Layout } from "./Layout";
import { ErrorMessage } from 'components/ErrorMessage.styled';

export class App extends Component {
  state = {
     images: [], 
     loading: false,
     error: false,
     searchText: '',
     page: 1,
}
  
 handelSearch = (searchText) => {
   this.setState({ searchText, page: 1, images: [] }); 
   
  }

  handlerLoadMore = ({ page }) => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    
  }

  async componentDidUpdate(prevProps, prevState) {
    
    if (prevState.searchText !== this.state.searchText
    || prevState.page !== this.state.page) {
            this.setState({loading: true, error:false });
            
      try {
              const galleryImages = await fetchImages(this.state.searchText, this.state.page);
                this.setState(prevState => ({images: [...prevState.images, ...galleryImages.hits]}));
               
        if (!galleryImages.hits.length) {
          toast.success("No more pictures. Please, try something else.", {position:'top-right'})
        }
      } catch (error) {
                  this.setState({ error: true });
                
      } finally {
              this.setState({ loading: false });
            }
      }
  }
  
render() {
     return (
      <Layout>
        <Searchbar  handelSearch={this.handelSearch} />
        
     {this.state.loading && <RotatingLines
           strokeColor="grey"
           strokeWidth="5"
           animationDuration="0.75"
           width="96"
           visible={true}
          />}
     {this.state.error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}            
        
     {this.state.images.length > 0 && <ImageGallery gallery={this.state.images} />} 
        
     {this.state.images.length > 0 && <ButtonLoadMore  onClick = {this.handlerLoadMore} />}
      
        
         <Toaster /> 
      </Layout>
  );
  }
  
};
