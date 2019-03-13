import { upload } from '../utils/multer'


export const home = (req, res) => {
    res.render('homepage')
}

export const storeImage =  (req, res) => {

    const multer = upload.single('profile')

     multer(req, res, async (err, success) =>

        await err ?
            // A Multer error occurred when uploading.
            res.render('homepage',{msg:`<div style='color: red;'>${err.message}</div>`})
           :
            // An unknown error occurred when uploading.
            res.render('homepage', {msg:'<div>image enregistrée avec succés</div>'}) 
    )
}

