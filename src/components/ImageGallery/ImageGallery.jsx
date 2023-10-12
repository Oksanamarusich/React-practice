

export const ImageGallery = ({gallery}) => {
    return <div>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ul key={id}>
                <li>
                    <img src={webformatURL} alt = {tags} />
                </li>
        </ul>
        ))}
    
    </div>
}