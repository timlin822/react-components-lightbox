import './Image.css';

const ImageCard=({index,image,lightboxOpenHandler})=>{
    return (
		<div className="image-card">
			<img src={image.url} alt="image" onClick={()=>lightboxOpenHandler(index)} />
		</div>
    );
}

export default ImageCard;