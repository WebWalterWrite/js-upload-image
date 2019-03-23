import router from './config';
import { home, deleteImage, getProfile,  storeImage } from '../Controllers/uploadControllers';

/**
 * @description Renvoi page d'accueil
 */
router.get('/',home )


/**
 * @description -récupérere la photo de profil
 */
router.get('/profile', getProfile)

/**
 * @description - insert nouvelle image de profile
 */
router.post('/upload',storeImage)

/**
 * @description - insert nouvelle image de profile
 */
router.delete('/delete', deleteImage)



export default router