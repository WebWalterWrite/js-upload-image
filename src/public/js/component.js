import { axiosDeleteImage } from './api.js';

/**
 * @description - Renvoi un nouvel élement HTML
 * @param {string} el - nom du tag HTML
 */
const createElement = el => document.createElement(el);


/**
 * @description - Insert du contenu à l'élément html
 * @param {string} txt - Contient la valeur de l'élément html
 */
const createText = txt => document.createTextNode(txt);


/**
 * @description - ajoute attribut(s) sur l'élément html
 * @param {string} el - tag html (div, p, img...)
 * @param {string} arr - nom de l'attribut (src, class, id ...)
 */
const createAttribute = (el,arr) => (

    el = arr.map( ({attr, val}) => el.setAttribute(attr, val))
)

export const modal = (src) => {
// click input
    const inputFile = document.querySelector('#fileElem');

// créer la modal
    const div = createElement('div');
    div.setAttribute('class', 'modal');
    div.classList.remove('hide_modal');

// créer contenu modal
    const contentModal = createElement('div');
    contentModal.setAttribute('class', 'content_modal');

// créer le bouton supprimer modifier de la fenêtre modale
    const img = createElement('img');

    createAttribute(img, [
        {attr:'src',val:src},
        {attr:'width',val:'200px'},
        {attr:'height',val:'200px'}
    ]);

// box bouton
    const boxBtn = createElement('div');
    boxBtn.setAttribute('class','box_btn');

// delete bouton
    const rmv = createElement('p');
    const rmvTxt = createText('supprimer ma photo');
    createAttribute(rmv, [{attr:'id', val:'rmv'}]);
    rmv.appendChild(rmvTxt);
    rmv.addEventListener('click', async () => {
        const name = img.hasAttribute('src') && img.getAttribute('src');
        console.log(name)
        await axiosDeleteImage(name);
        img.setAttribute('src','public/img/user.png')
         
    });

// update bouton
    const update = createElement('p');
    const updatetext = createText('modifier ma photo');
    createAttribute(update, [{attr:'id', val:'update'}]);
    update.appendChild(updatetext);
    update.addEventListener('click', () => inputFile.click());

// progress bar
    const progressBox = createElement('div');
    createAttribute(progressBox, [{ attr: 'id', val:'contain_progress'}])
    const progress = createElement('progress');
    createAttribute(progress,[{attr:'id', val:'file_progress'},{attr:'max', val:'100'}, {attr:'value', val:'0'}]);
    const percent = createElement('p');
    createAttribute(percent, [{attr:'id',val:'percent_progress'}, {attr:'class', val:'progress_percent'}]);

// error upload
    const fileError = createElement('div');
    createAttribute(fileError, [{attr: 'id', val: 'err_file'}, {attr: 'class', val: 'upload_msg'}]);
    boxBtn.append(rmv, update);
    progressBox.append(progress, percent);
    contentModal.append(img,boxBtn, progressBox, fileError);

    div.appendChild(contentModal);

    return div
}

