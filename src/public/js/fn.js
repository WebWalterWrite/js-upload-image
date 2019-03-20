import { axiosPostImage } from "./api.js";


/**
 * @description Vérifie le type mime et renoi un booléan
 * @param {string} type - type de fichier 
 * @returns {boolean}
 */

export const getMimeType = type => {
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    return types.includes(type);
}


  /**
   * 
   * @param {object} img -- path image
   * @returns {string} -- chemin relatif à img
   */
  export const setImg = ({img}) => {

    let user = document.querySelector('#user_img')
    let progress = document.querySelector('#contain_progress');
    if(img)
    return (
        progress.classList.add('hidden'),
        user.setAttribute('src',`/public/${img}`)
    )  
}

export const getImg = ({img}) => {

    console.log(img)
    let user = document.querySelector('#user_img');
    user.className="no_blur_img";
    user.setAttribute('src', img ? `/public/upload/${img}` : '/public/img/user.png')
   
}


/**
 * @description - Soumettre la photo 
 */
export const sendFile = async () => {
    
    const inputFile = document.getElementById("fileElem");
    const errFile = document.querySelector("#err_file");

    const file = inputFile.files[0];
    
    // check si un fichier est fourni
    if (!file) return (errFile.textContent = "Aucune image soumise");

    // check si le fichier est bien au format jpeg/jpg/png
    if (!getMimeType(file.type))
        return (errFile.textContent = "L'image doit être de format jpeg ou png");

    //check si la taille du fichier est > à 2MO
    if (file.size > 2000000)
        return (errFile.textContent = "L'image ne doit pas dépasser 2Mo");

    // Si aucune erreur, l'image est envoyée
    const result = await axiosPostImage(file, setImg);

    return result;
};


