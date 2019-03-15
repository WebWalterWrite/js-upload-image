import { upload } from '../utils/multer'



export const storeImage =  (req, res) => {


    const multer = upload.single('profile')

     multer(req, res, async err =>{ 
        console.log(req.file)
         await err ?
            // A Multer error occurred when uploading.
            res.json({msg:`<div class='error'>${err.message}</div>`})
           :
            // An unknown error occurred when uploading.
            res.json({
                msg:"Votre image est bien enregistrée",
                img: `upload/${req.file.filename}`
            }) 
        })
}



