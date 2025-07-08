<h2>PhotoGallery</h2>
-Photo gallery created using React and Express js.

![img](https://github.com/shanamohamedali/PhotoGalleryReact_NodeExpress/blob/master/Screenshot_2025-06-21_02-23-11_0.png)

-**Screenshot of Uploading and Displaying Images**
![img](https://github.com/shanamohamedali/PhotoGalleryReact_NodeExpress/blob/master/Screenshot_2025-06-21_02-24-51_0.png)

<h2>Features</h2>
<p></p>-<b>Uploading Images</b></p>
  Uploads image in add icon's onChange event.It will Upload images to the backend and stores in images folder inside the public folder. While uploading the image name will be displayed under the add icon.
<p></p>-<b>Display Images in the Gallery</b></p>
  If the images folder is not empty. Image names will be feteched from the backend using GET api and send as an array to the frontend and attach with the api in img src.
<p>-<b>Progress Bar</b></p>
  Once the image starts uploading the progress bar will shows the transition from 0 t0 100. And also a success message will displays once it completed the uploading.
<p>-<b>Modals</b></p>
  OnClick of any images in the gallery, it will show the image in a modal with exact size of the image. 
<p>-<b>Responsive UI</b></p>

  <h2>Technologies Used</h2>
  <p>-<b>Multer</b></p>
  Multer middleware is used to handle file upload(image upload).
  <p>-<b>Express.static()</b></p>
  Express.static, builtin middleware of express js is used to serve the static files (images) to the client.
  <p>-<b>Axios</b></p>
  Axios is a popular javascript library for making HTTp request from the client side.(promise-based HTTP client for browser and node js).
  <p>-<b>Plain CSS</b></p>
  UI styled using plain css.
  <p>-<b>Vite</b></p> for bundling and serving app.

   ## How to Run?
- **Install Dependencies**
- Run `npm install` to install the app's dependencies.

-**Start the App**
- Run `npm run dev` to start the app
