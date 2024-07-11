export function getStringFromRight(string) {
    const lastIndex = string.lastIndexOf("/");
    return string.substring(lastIndex + 1);
}

export const getProduchWithList = (id, list) => {
    for (let key in list) {
        if (list[key].unique_id === id) {
            return list[key]
        }
    }
}


export const removeUntilFirstSlash = (str) => {
    const lastSlashIndex = str.lastIndexOf('/');

    if (lastSlashIndex !== -1) {
        return str.substring(0, lastSlashIndex);
    } else {
        return str;
    }
}

export const getImageProduct = (imagesList, idImage) => {
    for (let img of imagesList) {
        if (img.id === idImage) {
            return img.image
        }
    }
}

export const getColorProduct = (colorIdList, colorList) => {
    let array = []

    for (let colorID in colorIdList) {
        for (let color in colorList) {
            if (colorIdList[colorID] === colorList[color].id) {
                array.push(colorList[color].codeColor)
            }
        }
    }

    return array
}


export const getMemoryProduct = (memoryIdList, memoryList) => {
    let array = []

    for (let memoryId of memoryIdList) {
        for (let memory of memoryList) {
            if (memoryId === memory.id) {
                array.push(memory.size)
            }
        }
    }

    return array;
}


export const getSIMProduct = (SIMIdList, SIMList) => {
    let array = [];

    for (let SIMId of SIMIdList) {
        for (let SIM of SIMList) {
            if (SIMId === SIM.id) {
                array.push(SIM.type)
            }
        }
    }

    return array;

}

export const getArrayImageProduct = (imagesIdList, imagesList) => {
    let array = []

    for (let imageID in imagesIdList) {
        for (let image in imagesList) {
            if (imagesList[image].id === imagesIdList[imageID]) {
                array.push(imagesList[image].image)
            }
        }
    }

    return array
}

export const getColor = (idColor, listColor) => {
    for (let color in listColor) {
        if (idColor === listColor[color].id) {
            return listColor[color].codeColor
        }
    }
}


export const getKeyColor = (colorSearch, colorList) => {
    for (let color of colorList) {
        if (color.codeColor === colorSearch) {
            return color.name
        }
    }
}

export const extractWordBeforeDash = (url) => {
    let word = url.split("/")
    let color = word[word.length - 1]
    return color
}


export function slugify(text) {
    const cyrillicMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
        'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E',
        'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
        'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H',
        'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E',
        'Ю': 'Yu', 'Я': 'Ya'
    };

    const transliterated = text.split('').map(char => cyrillicMap[char] || char).join('');
    return transliterated.charAt(0).toLowerCase() + transliterated.slice(1);
}


export const getPhoneIdWithPhoneOption = (phoneOptionId, phoneList) => {
    for (let phone of phoneList) {
        if (phone.id === phoneOptionId) {
            return {
                allColors: phone.allColors,
                allMemory: phone.allMemory,
                allSim: phone.allSim,
            }
        }
    }
}

export function generateCombinations(colors, memories, simTypes,
    ColorProductList, MemoryProductsList, SIMProductList
) {
    let combinations = [];
    colors.forEach(color => {
        memories.forEach(memory => {
            simTypes.forEach(simType => {
                combinations.push(`${getColorName(color,ColorProductList)}-${getMemoryProductName(memory, MemoryProductsList)}-${
                    transformSimType(getSIMProductName(simType, SIMProductList))
                }`);
                // combinations.push(`${color}-${memory}-ESIM-${simType}`);
            });
        });
    });
    return combinations;
}


export const temp = (PhonesParentList, PhonesOptions, ColorProductList, MemoryProductsList, SIMProductList) => {
    let allColors = PhonesParentList.allColors
    let allMemory = PhonesParentList.allMemory
    let allSim = PhonesParentList.allSim

    let combinations = generateCombinations(allColors, allMemory, allSim, ColorProductList, MemoryProductsList, SIMProductList)
    // console.log(tempa)

    // for (let key of tempa) {
    //     console.log(key)
    // }

    // for (let phonesOption of PhonesOptions) {
    //     console.log(extractRelevantPart(phonesOption.unique_id))
    // }

}


const getColorName = (idColor, listColor) => {
    for (let color in listColor) {
        if (idColor === listColor[color].id) {
            return slugify(listColor[color].name).charAt(0).toUpperCase() + slugify(listColor[color].name).slice(1);
        }
    }
}


const getMemoryProductName = (memoryID, memoryList ) => {
    for (let memory of memoryList) {
        if (memoryID === memory.id) {
            return memory.size
        }
    }
}

const getSIMProductName = (simID, simList) => {
    for (let sim of simList) {
        if (simID === sim.id) {
            return sim.type
        }
    }
} 


function transformSimType(simType) {
    return simType.replace(/\s+/g, '').replace('+', '--');
}

function extractRelevantPart(uniqueId) {
    let parts = uniqueId.split('-');
    let relevantPart = parts.slice(3).join('-');
    return relevantPart;
}