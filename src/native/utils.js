export function readPathAsBase64(path) {
    return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(path, fileEntry => {
            fileEntry.file(file => {
                let fileReader = new FileReader();
                fileReader.onloadend = function (evt) {
                    resolve(evt.target.result);
                };
                fileReader.onerror = reject;
                fileReader.readAsDataURL(file);
            }, reject)
        }, reject);
    });
}

export function convertDataUrlToBase64(url) {
    let match = /^data:[^;]+;base64,/.exec(url);
    if (match) {
        return url.substr(match[0].length);
    } else {
        return url;
    }
}

export function chooseFileAndReadAsBase64OnPC() {
    let input = document.createElement("input");
    input.type = "file";

    return new Promise(resolve => {
        document.body.appendChild(input);
        input.click();
        input.onchange = () => {

            if (input.files && input.files.length) {
                let file = input.files[0];
                console.log(input.value);

                let fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                    resolve(fileReader.result);
                }, false);

                fileReader.readAsDataURL(file);
            }

        };
    }).finally(() => {
        document.body.removeChild(input);
    });
}
