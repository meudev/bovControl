import { TouchableOpacityProps } from 'react-native';
import {
    Button,
    Text
} from './styles';

interface Props extends TouchableOpacityProps {
    text: string;
};

export default function ButtonWarning({
    text,
    ...rest
}: Props) {
    return (
        <Button
            {...rest}
        >
            <Text>{text}</Text>
        </Button>
    );
}