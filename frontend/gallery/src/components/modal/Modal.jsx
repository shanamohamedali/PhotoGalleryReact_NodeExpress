import React from 'react'
import "../modal/Modal.css"
import { IoMdCloseCircle } from "react-icons/io";

export function Modal({setIsOpen,selectedImage,setSelectedImage}) {
    console.log("selected image",selectedImage);
    const handleModal=(e)=>{
        setIsOpen(false);
        setSelectedImage("");
    }

  return (
    <div className='modal-main-container'>
        <div className='modal-section'>
            <img src={`http://localhost:3002/public/images/${selectedImage}`}></img>
        </div>
        <button className='close-icon' onClick={handleModal}>
            <IoMdCloseCircle size={40} color='white' />
        </button>
     
    </div>
  )
}


