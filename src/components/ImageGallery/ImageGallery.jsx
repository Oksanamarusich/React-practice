import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryImages} from "../ImageGallery/ImageGallery.styled";

export const ImageGallery = ({ gallery }) => {
    return <GalleryImages>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ul key={id}>
                <ImageGalleryItem 
                    id={id}
                    picture={webformatURL}
                    picturemodal={largeImageURL}
                    alt = {tags}/>
            </ul>
        ))}
    
    </GalleryImages>
}