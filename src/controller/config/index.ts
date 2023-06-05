import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from '../../../env'

const app = initializeApp(config);

const db = getFirestore(app);

export default db