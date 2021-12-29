export const ellipse = (string, length) => {
    return string.length > length ? string.slice(0, length - 1) + '...' : string
}