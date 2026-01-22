import multer from "multer"
 
// configuration du  sckotage de lèimage 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


// le filtrage 

const fileFilter = (req, file ,cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error ('Seul les media de type image sont autorisé '), false)
    }
}

// exporter le middleware muter pret 

export const uplaod = multer({
storage, fileFilter,
limits: {fileSize: 20 * 1024 * 1024} // limite 20 Mo par fichiers 

})
