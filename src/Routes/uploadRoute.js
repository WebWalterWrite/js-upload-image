import router from './config';
import { home, getProfile,  storeImage } from '../Controllers/uploadControllers';

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




export default router