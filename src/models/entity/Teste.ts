import { IBaseModel } from "../shared/base-model";
import { TData_nascimento } from '../util/data_nascimento-type'

export class TesteClass implements IBaseModel {
    id: string | number | undefined;
    nome?: string;
    data_nascimento?: TData_nascimento

    constructor(params: TesteClass) {
        if (params) Object.assign(this, params)
    }
}

