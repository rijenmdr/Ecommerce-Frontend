export const ellipse = (string, length) => {
    console.log("String",string)
    return string.length > length ? string.slice(0, length - 1) + '...' : string
}