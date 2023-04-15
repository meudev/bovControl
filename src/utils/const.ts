import {format} from 'date-fns';

export const today = format(new Date(), 'dd/MM/yyyy');

export const dataType = [
    { label: 'BPA', value: 'BPA' },
    { label: 'Antibiótico', value: 'Antibiótico' },
    { label: 'BPF', value: 'BPF' },
];

export const dataBoolean = [
    { label: 'Sim', value: 'Sim'},
    { label: 'Não', value: 'Não'},
]