import { TData_nascimento } from "../../models/util/data_nascimento-type"
export class Data {
    constructor() { }

    public getWidthScreen(): number {
        return window.innerWidth
    }

    public timestamp_to_data({ seconds}: TData_nascimento) {
        const dataFirestore = new Date(seconds * 1000);

        const dia = String(dataFirestore.getDate()).padStart(2, '0');
        const mes = String(dataFirestore.getMonth() + 1).padStart(2, '0');
        const ano = dataFirestore.getFullYear();

        return `${dia}/${mes}/${ano}`;
 
    }
}