const ASSET_LIBRARY_URL = 'https://cdn.kanava.azzie.lol/luctisity/assetlib'; // TODO: make this not hard-coded

const libraryCache = {
    backdrops: null,
    costumes: null,
    sounds: null,
    sprites: null,
}

const getLibraryManifest = async type => {
    if (libraryCache[type] != null) {
        return libraryCache[type];
    }
    const response = await fetch(`${ASSET_LIBRARY_URL}/${type}/manifest.json`);
    if (!response.ok) {
        return [];
    }
    const json = await response.json();
    libraryCache[type] = json;
    return json;
}

export const getBackdropLibrary = () => getLibraryManifest('backdrops');
export const getCostumeLibrary = () => getLibraryManifest('costumes');
export const getSoundLibrary = () => getLibraryManifest('sounds');
export const getSpriteLibrary = () => getLibraryManifest('sprites');
