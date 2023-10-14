import Modal from 'react-modal';
import { Component } from 'react';
import "../Modal/Modal.css";
import { GalleryItem,  GalleryImg } from "./ImageGalleryItem.styled";

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
                        < GalleryImg src={picture} alt={alt} onClick={this.openModal} />
                  </li>

                  <Modal
                        
                        isOpen={isModalOpen}
                        onRequestClose={this.closeModal}
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



