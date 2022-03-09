export interface Point {
    x: number;
    y: number;
}

export interface Camera {
    x: number;
    y: number;
    z: number;
}

export interface Box {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
}

export const screenToCanvas = (point: Point, camera: Camera): Point => {
    return {
        x: point.x - camera.x,
        y: point.y - camera.y,
    };
};

export const canvasToScreen = (point: Point, camera: Camera): Point => {
    return {
        x: (point.x + camera.x) * camera.z,
        y: (point.y + camera.y) * camera.z,
    };
};

export const getViewport = (camera: Camera, box: Box): Box => {
    const topLeft = screenToCanvas({ x: box.minY, y: box.minY }, camera);
    const bottomRight = screenToCanvas({ x: box.maxX, y: box.maxY }, camera);

    return {
        minX: topLeft.x,
        minY: topLeft.y,
        maxX: bottomRight.x,
        maxY: bottomRight.y,
        width: bottomRight.x - topLeft.x,
        height: bottomRight.y - topLeft.y,
    };
};

export const panCamera = (camera: Camera, dx: number, dy: number): Camera => {
    return {
        x: camera.x - dx / camera.z,
        y: camera.y - dy / camera.z,
        z: camera.z,
    };
};

export const zoomCamera = (camera: Camera, point: Point, dz: number): Camera => {
    const zoom = camera.z - dz * camera.z;

    const p1 = screenToCanvas(point, camera);
    const p2 = screenToCanvas(point, { ...camera, z: zoom });

    return {
        x: camera.x + (p2.x - p1.x),
        y: camera.y + (p2.y - p1.y),
        z: zoom,
    };
};

export const zoomCameraTo = (camera: Camera, point: Point, zoom: number): Camera => {
    const p1 = screenToCanvas(point, camera);
    const p2 = screenToCanvas(point, { ...camera, z: zoom });

    return {
        x: camera.x + (p2.x - p1.x),
        y: camera.y + (p2.y - p1.y),
        z: zoom,
    };
};

export const zoomIn = (camera: Camera): Camera => {
    const i = Math.round(camera.z * 100) / 25;

    const nextZoom = (i + 1) * 0.1;

    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return zoomCameraTo(camera, center, camera.z - nextZoom);
};

export const zoomOut = (camera: Camera): Camera => {
    const i = Math.round(camera.z * 100) / 25;

    const nextZoom = (i - 1) * 0.1;

    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return zoomCameraTo(camera, center, camera.z - nextZoom);
};

export const resetZoom = (camera: Camera): Camera => {
    if (camera.z === 1) return camera;
    
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return zoomCameraTo(camera, center, 1);
}