
import React, {Component} from 'react';

import { useState , useEffect} from 'react';
import './App.css';


const App = () => {
  console.log('here');
  return (
    <div>
      <ImageList />
    </div>
  );
};

  const ImageList = () => {
  const [images, setImages]= useState([]);
  const[isLoading, setIsLoading]= useState(true);




  const fetchImages = async () => {
    fetch('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setImages(data);
      });
  };

  const renderImages = () => {
    console.log();
    return images.map((image) => {
      console.log();
      return (
        <div className="image__wrapper" key={image.id}>
          <img src={image.urls.small} alt={image.id} />
          { <button type="button" className="image__expand" onclick={ images }>
            exp
          </button> }
        </div>
      );
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <>{isLoading ? <p>loading ....</p> : renderImages()}</>;
};

export default App;
