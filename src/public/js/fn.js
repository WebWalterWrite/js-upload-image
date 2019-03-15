

/**
 * @description Vérifie le type mime et renoi un booléan
 * @param {string} type - type de fichier 
 * @returns {boolean}
 */

export const getMimeType = type => {
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    return types.includes(type);
}



// progression des transferts depuis le serveur jusqu'au client (téléchargement)
 const updateProgress = (evt) => {
    evt.lengthComputable && 
    console.log( Math.round(progressEvent.loaded/progressEvent.total * 100) + '%')  
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
