import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { deleteChecklist, deleteChecklistOffline, updateCheckList } from '../../databases/offline/repositorio/Repository';

import { Body, Container, Content } from './styles';

import { ChecklistDTO } from '../../dto/ChecklistDTO';

import Header from '../../components/Header';
import ButtonConfirmation from '../../components/ButtonConfirmation';
import Input from '../../components/Input';
import ButtonWarning from '../../components/ButtonWarning';

interface PropsRoute {
    data: ChecklistDTO;
}

export default function UpdateCheckList() {
    const { navigate } = useNavigation<any>();
    const route = useRoute();
    const { data } = route.params as PropsRoute;
    const [name, setName] = useState(data?.from?.name);
    const [farmName, setFarmName] = useState(data?.farmer?.name);
    const [farmCity, setFarmCity] = useState(data?.farmer?.city);
    const [supervisor, setSupervisor] = useState(data?.to?.name);
    const [amountOfMilk, setAmountOfMilk] = useState(String(data?.amount_of_milk_produced));
    const [numberOfCattle, setNumberOfCattle] = useState(String(data?.number_of_cows_head));

    async function handleUpdate() {
        let msg = '';

        if (Number(numberOfCattle) < 0 || numberOfCattle === '') {
            msg = 'Preencha o número de cabeça de gados.'
        }

        if (Number(amountOfMilk) < 0 || amountOfMilk === '') {
            msg = 'Preencha o número de litros produzidos.'
        }

        if (supervisor.length < 2) {
            msg = 'Preencha o nome do supervisor.'
        }

        if (farmCity.length < 2) {
            msg = 'Preencha a cidade da fazenda.'
        }

        if (farmName.length < 2) {
            msg = 'Preencha o nome da fazenda.'
        }

        if (name.length < 2) {
            msg = 'Preencha o nome do fazendeiro.'
        }

        if (msg === '') {
            const body: ChecklistDTO[] = [
                {
                    _id: data._id,
                    type: data.type,
                    amount_of_milk_produced: Number(amountOfMilk),
                    number_of_cows_head: Number(numberOfCattle),
                    farmer: {
                        name: farmName,
                        city: farmCity,
                    },
                    from: {
                        name: name,
                    },
                    to: {
                        name: supervisor,
                    },
                    had_supervision: data.had_supervision,
                    created_at: data.created_at,
                    updated_at: String(new Date()),
                    location: {
                        latitude: 25.5,
                        longitude: 32.5,
                    },
                }
            ];

            try {
                await updateCheckList(body);
                return navigate('Home')
            } catch (error) {
                return Alert.alert('Atenção', 'Falha ao atualizar o checklist.');
            }
        }

        return Alert.alert('Atenção', msg);
    }

    async function handleDelete() {
        Alert.alert('Atenção', 'Deseja realmente deletar o checklist?', [
            {
                text: 'Não',
                onPress: () => { },
                style: 'cancel',
            },
            { text: 'Sim', onPress: () => deleteCheckList() },
        ])
    }

    async function deleteCheckList() {
        try {
            await deleteChecklistOffline(data);
            return navigate('Home')
        } catch (error) {
            console.log(error)
            return Alert.alert('Atenção', 'Falha ao deletar o checklist.');
        }
    }

    return (
        <Container>
            <Header
                title='Atualizar Checklist'
                back
            />
            <Body>
                <Content>
                    <Input
                        label='Nome do Fazendeiro'
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        label='Nome da Fazenda'
                        value={farmName}
                        onChangeText={setFarmName}
                    />
                    <Input
                        label='Cidade da Fazenda'
                        value={farmCity}
                        onChangeText={setFarmCity}
                    />
                    <Input
                        label='Nome do Supervisor'
                        value={supervisor}
                        onChangeText={setSupervisor}
                    />
                    <Input
                        label='Quant. de Leite Produzida no Mês'
                        value={amountOfMilk}
                        onChangeText={setAmountOfMilk}
                    />
                    <Input
                        label='Quant. de Cabeça de Gado'
                        value={numberOfCattle}
                        onChangeText={setNumberOfCattle}
                    />
                </Content>
                <ButtonConfirmation
                    text='SALVAR'
                    onPress={handleUpdate}
                />
                <ButtonWarning
                    text='DELETAR'
                    onPress={handleDelete}
                />
            </Body>
        </Container>
    );
}