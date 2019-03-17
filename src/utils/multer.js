import multer from 'multer'
import path from 'path';


const storage = multer.diskStorage({ 
    destination:(req, file, cb) => cb (null, './src/public/upload'),
    filename: (req, file, cb) => cb (null, `${file.fieldname}-${Date.now()}.jpg`)
})


/**
Vérifier le type de fichier.
 */

const isFileType = (file, cb) => {

// type requis
    const fileExt = ['.jpeg','.jpg', '.png', '.gif']
    const mimeType = ['image/jpeg', 'image/png']

// type du fichier reçu
    const mime = file.mimetype;
    const ext= path.extname(file.originalname)

// test type
    const ifType = mimeType.includes(mime)
    const ifExt = fileExt.includes(ext)

    if(ifType && ifExt){
        return cb(null, true)
    }
    else{
        let err = { message: 'Le fichier transmis doit être de type jpg, png, jpeg'}
        return cb(err, false)
    }
}


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 8 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => isFileType(file, cb)
});

export default upload;
