import db from "../config"
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { TesteClass } from "../../models/entity/Teste";
export class Teste {
    docRefs = collection(db, "teste");
    async getAllTeste(): Promise<Array<TesteClass>> {
        return getDocs(this.docRefs).then((resp) => {
            const values: any = []
            resp.forEach(item => values.push({ id: item.id, ...item.data() }))
            return values
        })
    }
    async getTeste(val): Promise<any> {
        const docRef = doc(this.docRefs, val);
        return getDoc(docRef).then((resp) => {
            console.log(resp.data())
        })
    }
}