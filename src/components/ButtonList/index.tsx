import { useNavigation } from '@react-navigation/native';
import { ChecklistDTO } from '../../dto/ChecklistDTO';
import { ButtonCheckList, Text, Title, Date, Content, FarmInfo } from './styles';
import formatDate from '../../hooks';
import { MapPinLine } from 'phosphor-react-native';

interface Props {
    data: ChecklistDTO;
}

export default function ButtonList({
    data
}: Props) {
    const { navigate } = useNavigation<any>();

    function handleView() {
        navigate('ViewCheckList', { data });
    }

    return (
        <ButtonCheckList
            onPress={handleView}
        >
            <Title>{data?.from?.name}</Title>
            <Content>
                <MapPinLine size={32} weight="bold" />
                <FarmInfo>
                    <Text>{data?.farmer?.name}</Text>
                    <Text>{data?.farmer?.city}</Text>
                </FarmInfo>
            </Content>
            <Date>Criado em: {formatDate(data?.created_at)}</Date>
        </ButtonCheckList>
    );
}