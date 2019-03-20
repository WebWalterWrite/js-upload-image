import upload from "../utils/multer";
import { getImg, removeImg } from "../utils/fileSystem";

export const storeImage = async (req, res) => {
	const img = await getImg();

	if (img && img.length > 0) {
		await removeImg(...img)

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
    }
};


export const home = (req, res) => {

	res.render("homepage");
};



export const getProfile = async (req, res) => {

    const img = await getImg()

    res.json({img:img})

}