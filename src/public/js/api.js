/**
 * @description Envoi fichier avec xhtml request
 * @param {object} data - file photo
 * @param {function} cb - callback function affichage message (err ou succes)  + photo
 */
export const xhrPostImage = async (file, cb) => {

    let form = new FormData();
    form.append('profile', file, 'profile.png')

    let http = new XMLHttpRequest();
    let url = 'http://localhost:3000/upload';

    http.addEventListener("progress", updateProgress);

    http.open('POST', url, true);

    let response = await http.send(form)

    cb(response)
}


/**
 * @description Envoi fichier avec fetch api
 * @param {object} file - file photo
 * @param {function} cb - callback function affichage message (err ou succes)  + photo
 */ 
export const fetchPostImage = async (file, cb) => {

    let form = new FormData();
    form.append('profile', file, 'profile.png')
    
    const result = await fetch('http://localhost:3000/upload',{
           method: 'post',
           body:form
        })
        
        let response = await result.json();
     
        cb(response)
}


/**
 * @description Envoi fichier avec axios
 * @param {object} file - file photo
 * @callback cb - callback function affichage message (err ou succes)  + photo
 */

export const axiosPostImage = async (file, cb) => {

    let form = new FormData();

    form.append('profile', file, 'profile.png')
    const {data} = await axios
    .post('http://localhost:3000/upload',form,
        {
            onUploadProgress: progressEvent => {
                      const bar = document.querySelector('#file_progress');
                      const percentBar = document.querySelector('#percent_progress');

                      bar.setAttribute('value',Math.round(progressEvent.loaded/progressEvent.total * 100));
                      percentBar.textContent=Math.round(progressEvent.loaded/progressEvent.total * 100)+'%';
            }
        })
    
    cb(data)
}

/**
 * @description -récupérer l'image stockée localement
 * @callback  cb - Prend la fonction getImg 
 */
export const axiosGetImage = async cb => {

    const { data } = await axios.get('http://localhost:3000/profile');
    
    cb(data)
}


/**
 * @description - supprimer image de profile
 * @param {string} name - Prend le nom de l'image
 */

 export const axiosDeleteImage = async name => {
     try {
         const { data } = await axios.delete('http://localhost:3000/delete', {data:{img:`..${name}`}})
         return data
     } catch (error) {
         console.log('Une erreur est survenue lors de la suppression : ', error.message)
     }
 }
