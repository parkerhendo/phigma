import { atom } from 'jotai';

export type Layer = {
    id: string;
    name: string;
};

export type PageState = {
    layers: Layer[];
};

const pageStateAtom = atom<PageState>({
    layers: [
        {
            id: 'layer 1',
            name: 'Layer 1',
        },
        {
            id: 'layer 2',
            name: 'Layer 2',
        },
        {
            id: 'layer 3',
            name: 'Layer 3',
        },
    ],
});

export default pageStateAtom;
