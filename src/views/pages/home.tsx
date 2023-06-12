import React, { useEffect, useState } from 'react';
import { VStack, Center, Text, FlatList } from 'native-base'
import { Teste } from '../../controller/services/teste.service'
import Card from '../components/card'
import { TesteClass } from '../../models/entity/Teste';

export function Home() {
    const [viewTeste, setViewTeste] = useState<Array<TesteClass>>([])


    useEffect(() => {
        new Teste().getAllTeste().then((r) => setViewTeste(r))
    }, [])
    
    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <FlatList
                data={viewTeste}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) =>
                    <Card dados={item} />
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                ListEmptyComponent={() => (
                    <Center>
                        <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                            Você ainda não possui gastos no momento
                        </Text>
                    </Center>
                )}
            />
        </VStack>

    )
}

export default Home;