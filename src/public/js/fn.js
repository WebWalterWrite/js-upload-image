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


// Supprimer la modal
export const rmvModal = (t) => {
       let modal = document.querySelector('.modal');
       let remove = setTimeout(() => {
        document.body.removeChild(modal);
        }, t+200);

    // Effet de masquage de la modal
    const removeModal = () => setTimeout( cb => {
         modal.classList.add('hide_modal');
         cb
    }, t);
    removeModal(remove)
}

/**
 * @description - Modifier l'image de profile
 * @param {object} img -- path image
 * @returns {string} -- chemin relatif à img
 */

  export const setImg = ({img, msg}) => {

    let user = document.querySelector('#user_img')
    let progress = document.querySelector('#contain_progress');
    let uploadMsg = document.querySelector("#err_file");
    if(img)
    return (
        progress.classList.add('hidden'),
        user.setAttribute('src',`/public/${img}`),
        uploadMsg.textContent=msg
    )  
}

/**
 * @description - Insére l'image
 * @param {string} img - contient le nom de l'image 
 */
export const getImg = ({img}) => {

    let user = document.querySelector('#user_img');
    user.className="no_blur_img";
    user.setAttribute('src', img ? `/public/upload/${img}` : '/public/img/user.png')
}


/**
 * @description - Soumettre la photo 
 * @param {array} inputFile - Contient le fichier 
 */
export const sendFile = async (inputFile) => {

    let uploadMsg = document.querySelector("#err_file");
   
    // Reset err message
    uploadMsg.textContent = "";
    // Récupérer le fichier
    let file = inputFile.files[0];

    // check si le fichier est bien au format jpeg/jpg/png
    if (!getMimeType(file.type))
        return (uploadMsg.textContent =
          "L'image doit être de format jpeg ou png");

    //check si la taille du fichier est > à 2MO
    if (file.size > 2000000)
        return (uploadMsg.textContent =
          "L'image ne doit pas dépasser 2Mo");

    // Si aucune erreur, l'image est envoyée
    await axiosPostImage(file, setImg);

    rmvModal(1000)
    
};



