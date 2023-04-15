import React, { FC, ReactElement, useRef, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
    Platform,
} from 'react-native';
import theme from '../../theme';
import { CaretDown } from 'phosphor-react-native';

interface Props {
    label: string;
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);
    const [dropdownTop, setDropdownTop] = useState(0);

    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = (): void => {
        DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    const onItemPress = (item: any): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({ item }: any): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)} >
            <Text style={styles.itemText}>
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement<any, any> => {
        return (
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={[styles.dropdown, { top: dropdownTop }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return (
        <>
            <Text style={styles.label}>
                {label}
            </Text>
            <TouchableOpacity
                ref={DropdownButton}
                style={styles.button}
                onPress={toggleDropdown}
            >
                {renderDropdown()}
                <Text style={styles.buttonText}>
                    {(!!selected && selected.label)}
                </Text>
                <CaretDown
                    size={20}
                    weight="bold"
                    color={theme.colors.black}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    label: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.black
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 5,
        marginTop: 10,
        paddingRight: 10,
        height: 40,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        paddingLeft: 10,
        textAlign: 'left',
        fontFamily: theme.fonts.regular
    },
    dropdown: {
        marginTop: Platform.OS == 'ios' ? 0 : -20,
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        marginLeft: 30,
        marginRight: 30,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    overlay: {
        width: '100%',
        height: '100%',
        padding: 30,
    },
    item: {
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: theme.colors.primary
    },
    itemText: {
        fontFamily: theme.fonts.semiBold
    }
});

export default Dropdown;