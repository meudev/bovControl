import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';

import logoApp from '../../assets/logo.png';

import { ButtonBack, Container, Logo, Title } from './styles';

import theme from '../../theme';

interface Props {
    title?: string;
    back?: boolean;
}

export default function Header({
    title,
    back
}: Props) {
    const navigation = useNavigation<any>();

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            {
                back ?
                    <ButtonBack
                        onPress={handleBack}
                    >
                        <CaretLeft
                            size={28}
                            weight="bold"
                            color={theme.colors.white}
                        />
                    </ButtonBack>
                    :
                    <Logo source={logoApp} />
            }
            <Title>
                {title ? title : 'BovControl'}
            </Title>
        </Container>
    );
}