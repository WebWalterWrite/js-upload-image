import fs, { promises } from 'fs'
import path from 'path'
const { readdir, readFile, unlink } = promises

const pathImg = path.join(__dirname, '../public/upload/')



export const getUser = async () => {
    const pathUser = path.join(__dirname, '../storage/user.json');
    try {
        const user = await readFile(pathUser,'utf8');
        return JSON.parse(user)
    } catch (error) {
        console.log("L'erreur getUser fn suivante est survenue: ", error.message); 
    }
};


export const getImg = async () => {
    try {
        const isImg = await readdir(pathImg)
       
        return isImg
    } catch (error) {
        console.log("L'erreur setImg fn suivante est survenue: ", error.message);
    }
}

export const removeImg = async (val) => {
    try {
        const ifDelete = val.includes('../public/upload/');

        const fullPath = ifDelete && path.join(__dirname,val);

        await unlink( fullPath || pathImg+val)
        
    } catch (error) {
        console.log("L'erreur removeImg fn suivante est survenue: ", error.message);
    }
};