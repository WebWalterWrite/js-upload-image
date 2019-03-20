import { sendFile } from './fn.js';
import { axiosDeleteImage } from './api.js';
// créer modal
const createElement = el => document.createElement(el);
const createText = txt => document.createTextNode(txt);

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
         
    })

    // update bouton
    const update = createElement('p');
    const updatetext = createText('modifier ma photo');
    createAttribute(update, [{attr:'id', val:'update'}]);
    update.appendChild(updatetext);
    update.addEventListener('click', () => inputFile.click());

    // Une fois le fichier selectionné la modal se referme
    inputFile.addEventListener('change', () => (
        div.classList.add('hide_modal'),
        sendFile()
        ))

    boxBtn.append(rmv, update);
    contentModal.append(img,boxBtn);

    div.appendChild(contentModal);

    return div
}

