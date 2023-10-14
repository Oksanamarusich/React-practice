import Modal from 'react-modal';
import { Component } from 'react';
//import { Overlay, ContainerImg } from "../Modal/Modal.styled"
import "../Modal/Modal.css";
import { GalleryItem } from "./ImageGalleryItem.styled";


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
      state = {
            isModalOpen: false,
      };

      openModal = () => {
            this.setState({ isModalOpen: true });
      };

      closeModal = () => {
            this.setState({ isModalOpen: false });
      };

      render() {
            const { isModalOpen } = this.state;
            const { id, picture, picturemodal, alt } = this.props;
            return (<GalleryItem >
                  <li key = {id}>
                        <img src={picture} alt={alt} onClick={this.openModal} />
                  </li>

                  <Modal
                        
                        isOpen={isModalOpen}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Example Modal"
                         className="Modal"
                         overlayClassName="Overlay"
             
                  >
                        <div>
                            <img className ="modal-picture" src={picturemodal} alt={alt} />
                        </div>
                        
                        
                  </Modal>
            </GalleryItem>)

      }
}



// export const ImageGalleryItem = ({id, picture,picturemodal, alt}) => {
//       return <li key={id}>
//             <img src={picture} alt={alt} />
//       </li>
// }