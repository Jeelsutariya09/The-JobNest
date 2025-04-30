// import multer from  "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({ storage }).single("file");

import multer from 'multer';

const storage = multer.memoryStorage(); // for buffer (used with Cloudinary)
const singleUpload = multer({ storage }).single('file'); // 'file' should match your frontend input name

export default singleUpload;