import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ gallery }) => {
    return <div>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ul key={id}>
                <ImageGalleryItem 
                    id={id}
                    picture={webformatURL}
                    picturemodal={largeImageURL}
                    alt = {tags}/>
            </ul>
        ))}
    
    </div>
}