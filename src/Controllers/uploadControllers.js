import upload from "../utils/multer";
import { getImg, removeImg } from "../utils/fileSystem";


/**
 * @description Traite l'image reçue. Stock l'image ou supprime l'ancienne image si existante et la remplace par la nouvelle
 * @param {object} res Renvoi un json contenant le message err or success / path de l'image
 */
export const storeImage = async (req, res) => {
	const img = await getImg(); // Vérifier si une image est déjà présente

	img.length > 0 && await removeImg(...img); // Si oui supprimer l'image

	const multer = upload.single("profile");

	multer(req, res, async err => {
        
		(await err)
			? 
			  res.json({ msg: `<div class='error'>${err.message}</div>` })
			: 
			  res.json({
					msg: "Votre image est bien enregistrée",
					img: `upload/${req.file.filename}`
			  });
    });
    
};


/**
 * @description - Renvoi la page accueil
 */
export const home = (req, res) => {

	res.render("homepage");
};



/**
 * @description  récupére la photo du dossier /upload.
 * @param {*} req 
 * @param {object} res renvoi une réponse au format json
 */
export const getProfile = async (req, res) => {

    const img = await getImg()
		const image = img.length > 0 ? img : false 
    res.json({img:image})

}

/**
 * @description Supprime la photo du dossier /upload
 * @param {object} req récupérer le l'objet img
 * @param {*} res 
 */
export const deleteImage = async (req, res) => {
	try {
		const val =req.body.img
		await removeImg(val); // Supprime l'image

		res.json({
      msg: "La photo a bien été supprimée",
    });
	} catch (error) {
			console.log('Une erreur est survenue deleteImage fn :', error.message)
	}

}