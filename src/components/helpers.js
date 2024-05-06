export function getStringFromRight(string) {
    const lastIndex = string.lastIndexOf("/");
    return string.substring(lastIndex + 1);
}