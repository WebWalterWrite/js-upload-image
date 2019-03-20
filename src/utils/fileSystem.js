import fs, { promises } from 'fs'
import path from 'path'
const { readdir, unlink } = promises

const pathImg = path.join(__dirname, '../public/upload/')


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
      
        const rmv = await unlink(pathImg+val)
        return  rmv
    } catch (error) {
        console.log("L'erreur removeImg fn suivante est survenue: ", error.message);
    }
};