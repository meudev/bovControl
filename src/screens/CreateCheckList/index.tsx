import { useState } from 'react';

import {
    Body,
    Container,
    Content,
} from './styles';

import Header from '../../components/Header';
import ButtonConfirmation from '../../components/ButtonConfirmation';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';

import { dataBoolean, dataType, today } from '../../utils/const';
import { createCheckList } from '../../databases/offline/repositorio/Repository';
import { ChecklistDTO } from '../../dto/ChecklistDTO';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function CreateCheckList() {
    const { navigate } = useNavigation<any>();
    const [name, setName] = useState('');
    const [farmName, setFarmName] = useState('');
    const [farmCity, setFarmCity] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [type, setType] = useState(undefined);
    const [amountOfMilk, setAmountOfMilk] = useState('');
    const [numberOfCattle, setNumberOfCattle] = useState('');
    const [hadSupervision, setHadSupervision] = useState(undefined);

    async function handleSave() {
        let msg = '';

        if (hadSupervision == undefined) {
            msg = 'Selecione se aconteceu a supervisão no mês atual.'
        }

        if (Number(numberOfCattle) < 0) {
            msg = 'Preencha o número de cabeça de gados.'
        }

        if (Number(amountOfMilk) < 0) {
            msg = 'Preencha o número de litros produzidos.'
        }

        if (type == undefined) {
            msg = 'Selecione um tipo de checklist.'
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
                    _id: String(Math.floor(Math.random() * 100103020)),
                    type: type,
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
                    had_supervision: hadSupervision === 'Sim' ? true : false,
                    created_at: String(new Date()),
                    updated_at: String(new Date()),
                    location: {
                        latitude: 25.5,
                        longitude: 32.5,
                    },
                }
            ];

            try {
                await createCheckList(body);
                return navigate('Home')
            } catch (error) {
                return Alert.alert('Atenção', 'Falha ao enviar o checklist.');
            }
        }

        return Alert.alert('Atenção', msg);
    }

    return (
        <Container>
            <Header
                title='Novo Checklist'
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
                    <Dropdown
                        label="Tipo do Checklist"
                        data={dataType}
                        onSelect={item => setType(item.value)}
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
                    <Dropdown
                        label="Supervisão no Mês Atual"
                        data={dataBoolean}
                        onSelect={item => setHadSupervision(item.value)}
                    />
                </Content>
                <ButtonConfirmation
                    text='ENVIAR'
                    onPress={handleSave}
                />
            </Body>
        </Container>
    );
}