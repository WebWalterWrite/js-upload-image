import router from './config';
import { home, storeImage } from '../Controllers/uploadControllers';

router.get('/',home )

router.post('/upload',storeImage)




export default router