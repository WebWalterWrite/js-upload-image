import { getImg, sendFile} from "./fn.js";
import { axiosGetImage } from "./api.js";
import { modal } from './component.js'

document.addEventListener("DOMContentLoaded", () => {

	const inputFile = document.getElementById("fileElem");
	const iconBtn = document.getElementById("choose_img")

/**
 * @description - récupére la photo de profil stockée
 */
	axiosGetImage(getImg)

/*
	au click sur user icon :
	- récupérer le path de la phoeto de profil
	- afficher la modal
*/
	iconBtn.addEventListener("click", () => {

		const img = document.querySelector('#user_img');
		
		const src = img.hasAttribute('src') && img.getAttribute('src');
		
		document.body.appendChild(modal(src));
	})


	// Une fois le fichier selectionné la modal se referme
	inputFile.addEventListener('change', () => {
		sendFile(inputFile);
	})
});
