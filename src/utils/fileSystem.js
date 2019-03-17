import { promises } from 'fs'
import path from 'path'
const { readdir, unlink } = promises

const pathImg = path.join(__dirname, '../public/upload/')

export const getImg = async (cb) =>{
    try {
        const isImg = await readdir(pathImg).toString()
       cb(isImg)
    } catch (error) {
        console.log("L'erreur suivante est survenue: ", error.message)
    }
}
export const setImg = async () => {
    try {
        const isImg = await readdir(pathImg)
        return isImg.length
    } catch (error) {
        console.log("L'erreur suivante est survenue: ", error.message);
    }
}

export const removeImg = async (val) => {
    try {
       
        const rmv = await unlink(val)
        return  rmv
    } catch (error) {
        console.log("L'erreur suivante est survenue: ", error.message);
    }
};