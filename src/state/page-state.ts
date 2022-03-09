import { atom } from 'jotai';

export type Layer = {
    id: string;
    name: string;
    selected: boolean;
    pos: {
        x: number;
        y: number;
    };
};

const pageStateAtom = atom<Layer[]>([
    {
        id: 'layer 1',
        name: 'Layer 1',
        selected: false,
        pos: {
            x: 0,
            y: 0,
        },
    },
]);

export default pageStateAtom;
