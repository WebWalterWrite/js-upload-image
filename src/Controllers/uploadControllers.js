import upload from '../utils/multer'
import { getImg, setImg } from "../utils/fileSystem";


export const storeImage =  async (req, res) => {

    const img = await setImg()
   if(img > 0){
       const ifImg = await getImg();
       console.log(ifImg)
       return res.json({img: 'supprimé'})
   }

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

export const home = (req, res) => {
    res.render('homepage' )
}


