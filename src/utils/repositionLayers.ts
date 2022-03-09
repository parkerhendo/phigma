import { useAtom } from 'jotai';

import pageStateAtom, { Layer } from '../state/page-state';

export const sendToBack = (layers: Layer[], ids: string[]): Layer[] => {
    const movingIds = new Set(ids);
    const moving: Layer[] = [];
    const notMoving: Layer[] = [];
    for (const layer of layers) {
        const arr = movingIds.has(layer.id) ? moving : notMoving;
        arr.push(layer);
    }
    return notMoving.concat(moving);
};

export const bringToFront = (layers: Layer[], ids: string[]): Layer[] => {
    const movingIds = new Set(ids);
    const moving: Layer[] = [];
    const notMoving: Layer[] = [];
    for (const layer of layers) {
        const arr = movingIds.has(layer.id) ? moving : notMoving;
        arr.push(layer);
    }
    return moving.concat(notMoving);
};

export const bringForward = (layers: Layer[], ids: string[]): Layer[] => {
    const movingIds = new Set(ids);
    const indices: number[] = [];
    layers.forEach((layer, index) => {
        if (movingIds.has(layer.id)) {
            indices.push(index);
        }
    });

    const result = layers.slice();
    indices.forEach((index) => {
        const movingLayer = result[index];
        const neighborAbove = result[index - 1];
        if (neighborAbove && !movingIds.has(neighborAbove.id)) {
            result[index] = neighborAbove;
            result[index - 1] = movingLayer;
        }
    });
    return result;
};

export const sendBackward = (layers: Layer[], ids: string[]): Layer[] => {
    const movingIds = new Set(ids);
    const indices: number[] = [];
    layers.forEach((layer, index) => {
        if (movingIds.has(layer.id)) {
            indices.push(index);
        }
    });

    const result = layers.slice();
    indices.forEach((index) => {
        const movingLayer = result[index];
        const neighborBelow = result[index + 1];
        if (neighborBelow && !movingIds.has(neighborBelow.id)) {
            result[index] = neighborBelow;
            result[index + 1] = movingLayer;
        }
    });
    return result;
};
