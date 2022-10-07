import {useState} from 'react';

import ImagesList from 'components/image/ImagesList';
import Lightbox from 'components/lightbox/Lightbox';

import IMAGES_DATA from 'data/ImagesData';

import './App.css';

function App() {
  const [lightboxIsOpen,setLightboxIsOpen]=useState(false);
  const [lightboxIndex,setLightBoxIndex]=useState("");
  const [lightboxImage,setLightBoxImage]=useState("");
  
  const lightboxOpenHandler=(index)=>{
    setLightboxIsOpen(true);
    setLightBoxIndex(index);
    setLightBoxImage(IMAGES_DATA[index]);
  };

  const lightboxCloseHandler=()=>{
    setLightboxIsOpen(false);
    setLightBoxIndex("");
    setLightBoxImage("");
  };

  const clickLeftHandler=(index)=>{
    setLightboxIsOpen(true);
    if(index<=0){
      setLightBoxIndex(0);
      setLightBoxImage(IMAGES_DATA[0]);
    }
    else{
      setLightBoxIndex(index);
      setLightBoxImage(IMAGES_DATA[index]);
    }
  };

  const clickRightHandler=(index)=>{
    setLightboxIsOpen(true);
    if(index>=IMAGES_DATA.length-1){
      setLightBoxIndex(IMAGES_DATA.length-1);
      setLightBoxImage(IMAGES_DATA[IMAGES_DATA.length-1]);
    }
    else{
      setLightBoxIndex(index);
      setLightBoxImage(IMAGES_DATA[index]);
    }
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <ImagesList lightboxOpenHandler={lightboxOpenHandler} />
        <h1 className="text">圖片來源: Unsplash</h1>
        <Lightbox lightboxIsOpen={lightboxIsOpen} lightboxIndex={lightboxIndex} lightboxImage={lightboxImage} lightboxCloseHandler={lightboxCloseHandler} clickLeftHandler={clickLeftHandler} clickRightHandler={clickRightHandler} />
      </div>
    </section>
  );
}

export default App;