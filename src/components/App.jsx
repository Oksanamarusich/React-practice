import {Component} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import {ButtonLoadMore} from "./ButtonLoadMore/ButtonLoadMore"
import { Layout } from "./Layout";
import { fetchImages } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import { ErrorMessage } from 'components/ErrorMessage.styled';
import toast, { Toaster } from 'react-hot-toast';



export class App extends Component {
  state = {
     images: [], 
        loading: false,
        error: false,
    searchText: '',// те по чому я роблю запит
    page: 1,
    
    
  }
  
 handelSearch = (searchText) => {
    this.setState({ searchText, page:1, images:[] }) //зберігаю термін пошуку
     
  }

  handlerLoadMore = ({ page }) => {
    console.log('CLICK')
    console.log('PAGE', this.state.page)
    this.setState(prevState => ({page: prevState.page + 1}))
    console.log('after setState handker', this.state.page)
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('this.props didMount:>>', this.state.searchText)
    console.log('this.props didMount:>>', this.state.page)
    if (prevState.searchText !== this.state.searchText
    || prevState.page !== this.state.page) {
            this.setState({ loading: true, error:false });
            try {
              const galleryImages = await fetchImages(this.state.searchText, this.state.page);
             
          
                 console.log('AFTER API', galleryImages, this.state.page)
              // this.setState({ images: galleryImages.hits })
              this.setState(prevState => (
                {
                  images: [...prevState.images, ...galleryImages.hits]
                }));
             
              
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
