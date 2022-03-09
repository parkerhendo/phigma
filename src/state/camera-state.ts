import { atom } from 'jotai';

export type Layer = {
    id: string;
    name: string;
};

export type CameraState = {
    x: number;
    y: number;
    z: number; 
};

const cameraStateAtom = atom<CameraState>({
    x: 0,
    y: 0,
    z: 1,
});

export default cameraStateAtom;
