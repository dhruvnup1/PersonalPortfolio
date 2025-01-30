// utils.js
export const getImageUrl = (path) => {
    if (!path) {
        console.error("getImageUrl was called with an undefined path!");
        return "";
    }
    
    // Direct import using Vite's asset handling
    return `/src/Assets/${path}`;
};