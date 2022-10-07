import {FaTimes,FaChevronLeft,FaChevronRight} from 'react-icons/fa';

import IMAGES_DATA from 'data/ImagesData';

import './Lightbox.css';

const Lightbox=({lightboxIsOpen,lightboxIndex,lightboxImage,lightboxCloseHandler,clickLeftHandler,clickRightHandler})=>{
    return (
		<div className={lightboxIsOpen?"bg-overlay bg-overlay-open":"bg-overlay"}>
			<FaTimes className="lightbox-close-button" onClick={lightboxCloseHandler} />
			{lightboxIndex>0 && <FaChevronLeft className="lightbox-button lightbox-button-prev" onClick={()=>clickLeftHandler(lightboxIndex-1)} />}
			<img src={lightboxImage.url} className={lightboxIsOpen?"lightbox lightbox-open":"lightbox"} alt="lightbox-image" />
            {lightboxIndex<(IMAGES_DATA.length-1) && <FaChevronRight className="lightbox-button lightbox-button-next" onClick={()=>clickRightHandler(lightboxIndex+1)} />}
		</div>
    );
}

export default Lightbox;