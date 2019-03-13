import multer from 'multer'

const storage = multer.diskStorage({ 
    destination:(req, file, cb) => cb (null, './src/storage'),
    filename: (req, file, cb) => cb (null, `${req.body.filename}-${Date.now()}.jpg`)
})

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 400000
    },
    fileFilter: (req, file, cb) => isFileType(file, cb)
});

/**
 * 
 * @param {*} file 
 * @param {*} cb 
 */

const isFileType = (file, cb) => {
    const filetypes = ['jpeg','jpg', 'png', 'gif'];
    const mimeType = file.mimetype;
    const extName = path.extname()
}
