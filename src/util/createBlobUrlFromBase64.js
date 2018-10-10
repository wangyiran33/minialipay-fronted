export default function createBlobUrlFromBase64(data) {
    let buffer = Uint8Array.from(atob(data), c => c.charCodeAt(0));
    let blob = new Blob([buffer], {type: "image/*"});
    return URL.createObjectURL(blob);
}