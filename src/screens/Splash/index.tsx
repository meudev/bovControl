import { Container, Logo } from './styles';

import logoApp from '../../assets/logo.png';

export default function Splash() {
    return (
        <Container>
            <Logo source={logoApp} />
        </Container>
    );
}