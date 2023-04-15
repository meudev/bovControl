import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Body,
    Container,
    Content,
    Title,
    Text,
    Label
} from './styles';

import Header from '../../components/Header';

import { ChecklistDTO } from '../../dto/ChecklistDTO';
import ButtonConfirmation from '../../components/ButtonConfirmation';
import formatDate from '../../hooks';

interface PropsRoute {
    data: ChecklistDTO;
}

export default function ViewCheckList() {
    const route = useRoute();
    const { data } = route.params as PropsRoute;
    const { navigate } = useNavigation<any>();

    function handleUpdate() {
        navigate('UpdateCheckList', { data });
    }

    return (
        <Container>
            <Header
                title={data?.farmer?.name}
                back
            />
            <Body>
                <Content>
                    <Title>
                        {data?.from?.name}
                    </Title>
                    <Label>
                        Fazenda:
                    </Label>
                    <Text>
                        {data?.farmer?.name}
                    </Text>
                    <Label>
                        Cidade:
                    </Label>
                    <Text>
                        {data?.farmer?.city}
                    </Text>
                    <Label>
                        Supervisor:
                    </Label>
                    <Text>
                        {data?.to?.name}
                    </Text>
                    <Label>
                        Tipo do Checklist:
                    </Label>
                    <Text>
                        {data?.type}
                    </Text>
                    <Label>
                        Quantidade de Leite:
                    </Label>
                    <Text>
                        {data?.amount_of_milk_produced}
                    </Text>
                    <Label>
                        Quantidade de Gado:
                    </Label>
                    <Text>
                        {data?.number_of_cows_head}
                    </Text>
                    <Label>
                        Surpervisão no mês:
                    </Label>
                    <Text>
                        {data?.had_supervision ? 'SIM' : 'Não'}
                    </Text>
                    <Label>
                        Data da Criação:
                    </Label>
                    <Text>
                        {formatDate(data?.created_at)}
                    </Text>
                    <Label>
                        Ultima Atualização:
                    </Label>
                    <Text>
                        {formatDate(data?.updated_at)}
                    </Text>
                </Content>
                <ButtonConfirmation
                    text='EDITAR'
                    onPress={handleUpdate}
                />
            </Body>
        </Container>
    );
}