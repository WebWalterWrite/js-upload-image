import { getMimeType, setImg } from "./fn.js";
import { axiosPostImage } from './api.js';

document.addEventListener("DOMContentLoaded",  () => {

	const fileBtn = document.getElementById("openFile");
	const inputFile = document.getElementById("fileElem");
	const iconBtn = document.getElementById("choose_img");
	const errFile = document.querySelector("#err_file");

	// Ajouter une photo
	iconBtn.addEventListener("click", () => {
		inputFile.click();
	});

	// Soumettre la photo
	fileBtn.addEventListener("click",  async () => {
		const file = inputFile.files[0];

       
    // check si un fichier est fourni
        if (!file) 
         return errFile.textContent = "Aucun image soumise";
            
    // check si le fichier est bien au format jpeg/jpg/png
        if (!getMimeType(file.type))
        return errFile.textContent = "L'image doit être de format jpeg ou png";
    
    //check si la taille du fichier est > à 2MO
        if (file.size > 2000000)
        return errFile.textContent="L'image ne doit pas dépasser 2Mo"
 

        const result = await axiosPostImage(file,setImg)

       return result;
       
	});
});
 