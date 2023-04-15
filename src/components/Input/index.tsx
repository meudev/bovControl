import { TextInputProps } from 'react-native';

import { InputContainer, Label } from './styles';

import theme from '../../theme';

interface Props extends TextInputProps {
    label: string;
}

export default function Input({
    label,
    ...rest
}: Props) {

    return (
        <>
            <Label>{label}</Label>
            <InputContainer
                selectionColor={theme.colors.primary}
                {...rest}
            />
        </>
    )
}