const express=require("express");
const app=express();
const cors=require("cors");
const galleryRouter=require("./routes/gallery");

app.use(cors());
app.use(express.json());
app.use('/public/images',express.static('public/images'));
app.use("/api/photo-gallery",galleryRouter);

const PORT=3002;
app.listen(PORT,()=>console.log(`Server started at port ${PORT}`));