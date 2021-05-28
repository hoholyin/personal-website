export const moveTo = (dest, callback) => {
    callback(dest);
}

export const translateToTextLabel = (language) => {
    return language.split("-").join(" ").toUpperCase();
}

