import ImageCard from './ImageCard';

import IMAGES_DATA from 'data/ImagesData';

import './Image.css';

const ImagesList=({lightboxOpenHandler})=>{
    return (
        <div className="image-grid">
            {IMAGES_DATA.map((image,index)=>(
                <ImageCard key={image.id} index={index} image={image} lightboxOpenHandler={lightboxOpenHandler} />
            ))}
        </div>
    );
}

export default ImagesList;