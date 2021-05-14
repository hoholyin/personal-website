export const moveTo = (dest, callback) => {
    window.history.replaceState(null, "Ho Hol Yin", "/" + dest);
    callback(dest);
}
