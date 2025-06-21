import React, { useEffect, useState } from "react";
import "../gallery/Gallery.css";
import { API_URL } from "../../constants/constant";
import axios from "axios";
import { Modal } from "../modal/Modal";

export function Gallery({ newImage }) {
  const [allImages, setAllImages] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const getAllImages = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("allimagesresponse", response.data.files);
      if (response.data.files) {
        setAllImages(response.data.files);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("allimages--", allImages);

  useEffect(() => {
    getAllImages();
  }, [newImage]);

  const handleViewPhoto = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const configImage = (image) => {
    console.log("http://localhost:3002/public/images/" + image);
    return "http://localhost:3002/public/images/" + image;
  };

  return (
    <div className="photos-main-container">
      <div>
        {allImages.length > 0 ? (
          allImages.map((image) => (
            <img
              src={configImage(image)}
              key={image}
              className="photo-grid"
              alt="uploaded_image"
              onClick={() => handleViewPhoto(image)}
            />
          ))
        ) : (
          <h3>Gallery Empty,Upload images please!"</h3>
        )}

        {message && <p>{message}</p>}
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
}
