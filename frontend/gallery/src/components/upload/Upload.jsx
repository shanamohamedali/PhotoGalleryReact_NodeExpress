import React from "react";
import "../upload/Upload.css";
import { FiPlusCircle } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/constant";
import { Gallery } from "../gallery/Gallery";

export function Upload() {
  const [iconStatus, setIconStatus] = useState(false);
  const [newImage, setNewImage] = useState(" ");
  const [imageName, setImageName] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(10);

  const handleImage = (e) => {
    // e.preventDefault();
    const image = e.target.files[0];
    setNewImage(e.target.files[0]);

    console.log("filename", e.target.files[0].name);
    setImageName(e.target.files[0].name);

    handleUpload(image);
  };

  console.log("newimage", newImage);

  const handleUpload = async (image) => {
    console.log("imagefile", image);
    const formData = new FormData();
    formData.append("uploaded_file", image);
    console.log("formdata", formData);

    try {
      const response = await axios(API_URL, {
        method: "POST",
        headers: {
          "content-Type": "multipart/form-data",
        },
        data: formData,
        onUploadProgress: (ProgressEvent) => {
          const { loaded, total } = ProgressEvent;
          const progress = Math.floor((loaded * 100) / total);
          console.log("progress level", progress);
          setProgress(progress);
        },
      });

      console.log("response", response);
      if (response) {
        setMessage(response.data.message);
        setNewImage("");
      }
    } catch (error) {
      setMessage(response.data.error);
      console.log(error);
    }
  };

  return (
    <div className="container" >
      <div className="main-container" >
        <div className="photo-upload-section">
          <h1>Photo Gallery</h1>
          <h2>A picture is worth thousand words.</h2>

          <div className="icon">
            <label htmlFor="addIcon">
              {!iconStatus ? (
                <FiPlusCircle
                  size={35}
                  color="#EED8C0"
                  onMouseOver={() => setIconStatus(true)}
                />
              ) : (
                <FaCirclePlus
                  size={35}
                  color="#EED8C0"
                  onMouseOut={() => setIconStatus(false)}
                />
              )}
            </label>
            <input
              type="file"
              id="addIcon"
              name="addIcon"
              accept="image/"
              onChange={handleImage}
            />
            <p className="title">{imageName}</p>
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
          <div className="progress-section">
            <progress value={progress} max={100} />
          </div>
        </div>
      </div>
      <Gallery newImage={newImage} />
    </div>
  );
}
