import { Component } from 'react';
import { fetchImages } from 'Services/api';
import { Audio } from 'react-loader-spinner';
import { ErrorMessage } from 'components/ErrorMessage.styled';

export class ImageGallery extends Component{
    state = {
        images: [], 
        loading: false,
        error: false,
    }

    async componentDidUpdate(prevProps, prevState) {
        console.log('this.props:>>', this.props)
        if (prevProps.searchText !== this.props.searchText) {
            this.setState({ loading: true });
            try {
                const galleryImages = await fetchImages(this.props.searchText);
        console.log(galleryImages)
                this.setState({ images: galleryImages})
                
            } catch (error) {
              this.setState({ error: true });
            } finally {
              this.setState({ loading: false });
            }
            

        }
    }
        
    render() {
        return <div>
             {this.state.loading && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
            />}
     {this.state.error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}            
            {this.state.images.length > 0 && this.state.images.map(({ id, webformatURL, largeImageURL, tags }) => (
             <ul key={id}>
                 <li>
                    <img src={webformatURL} alt = {tags} />
                 </li>
         </ul>
         ))
    }
        </div>
    }
}




// export const ImageGallery = ({gallery}) => {
//     return <div>
//         {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
//             <ul key={id}>
//                 <li>
//                     <img src={webformatURL} alt = {tags} />
//                 </li>
//         </ul>
//         ))}
    
//     </div>
// }