import router from './config';
import { home, storeImage } from '../Controllers/imageControllers';

router.get('/',home )
router.post('/upload',storeImage)

export default router