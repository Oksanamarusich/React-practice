import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ gallery }) => {
    return <div>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ul key = {id}>
                <ImageGalleryItem key={id}
                    picture={webformatURL}
                    picturemodal={largeImageURL}
                alt = {tags}>
                    <img src={webformatURL} alt = {tags} />
                </ImageGalleryItem>
        </ul>
        ))}
    
    </div>
}