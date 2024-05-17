export function getStringFromRight(string) {
    const lastIndex = string.lastIndexOf("/");
    return string.substring(lastIndex + 1);
}


export const removeUntilFirstSlash = (str) => {
    // Находим последний индекс символа "/"
    const lastSlashIndex = str.lastIndexOf('/');
    
    // Если найден хотя бы один "/", удаляем все символы после него, включая сам "/"
    if (lastSlashIndex !== -1) {
        return str.substring(0, lastSlashIndex); // Возвращаем строку без элементов после последнего "/"
    } else {
        return str; // Если "/" не найден, возвращаем исходную строку
    }
}