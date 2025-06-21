const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  const imagePath = path.join("public/images");
  fs.readdir(imagePath, (error, files) => {
    if (error) {
      return res.json({
        message: error,
      });
    }
    if (files.length === 0) {
      return res.json({
        message: "Gallery is empty,Upload images",
      });
    }
    console.log("image file", files);
    return res.json({files});
  });
});

router.post("/",upload.single('uploaded_file'),(req, res) => {
  const imagefile=req.file;
  if(!imagefile){
    return res.status(400).json({
      error:"no image files uploaded"
    })
  }
    console.log("file",req.file);
return res.json({
  message:"Photo uploaded successfully"
})
});
module.exports = router;
