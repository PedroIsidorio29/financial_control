import React from 'react';
import { Data } from '../data';
import { Center, IPressableProps } from 'native-base'
import { TesteClass } from '../../models/entity/Teste';

type Props = IPressableProps &{
    dados : TesteClass
}

export default function Card({dados}: Props) {
    const data = new Data()
    return (

        <Center height={100} marginTop={'1.5'} marginX={'2'} bg="primary.400" rounded="sm" _text={{
            color: "black",
            fontSize: 'lg'
        }} shadow={"3"}  >
            {dados.nome}{data.timestamp_to_data(dados.data_nascimento)}
        </Center>

    )
}