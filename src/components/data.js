export const phones = [
    {
        id: "phone1",
        img: "../../../../ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/iphone.jpg', '../../../../ProductImages/iphone2.png', '../../../../ProductImages/ipneo3.webp', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone2",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone3",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone4",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone5",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone6",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone7",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    },
    {
        id: "phone8",
        img: "../../../../public/ProductImages/Border.png",
        alt: 'iPhone',
        name: 'Apple iPhone 15 129Gb SIM + Черный',
        price: [124999, 85990],

        colors: ['rgb(0, 0, 0)', 'rgb(235, 221, 195)', 'rgb(241, 246, 249)', 'rgb(219, 241, 216)', 'rgb(244, 171, 182)'],
        images: ['../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png', '../../../../ProductImages/Border.png'],
        SIM: ['SIM + SIM', 'ESIM + SIM', 'ESIM ONLY'],
        memory: ['128Gb', '256Gb', '512Gb']
    }
]

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка получения данных с сервера: ${response.status}`);
    }
    return response.json();
}

export const deviceProtection = [
    {
        num: '01',
        text: 'Прочный полимерный материал обеспечивает надежную защиту от царапин и падений.'
    },
    {
        num: '03',
        text: 'Пленка повторяет геометрию и вырезы именно вашего смартфона.'
    },
    {
        num: '04',
        text: 'Самовосстанавливается.'
    },
    {
        num: '05',
        text: 'Не оставляет отпечатков, а так же очень просто очищается при загрязнениях.'
    },
    {
        num: '02',
        text: 'Практически не заметна на экране.'
    },
    {
        num: '04',
        text: 'Самовосстанавливается.'
    },
    {
        num: '06',
        text: 'Не пузырится, проста в поклейке.'
    }
]

export const priceList = [
    {
        service: 'Диагностика / Старт АКБ',
        price: '800'
    },
    {
        service: 'Замена АКБ',
        price: '2000'
    },
    {
        service: 'Модуль (Дисплей + тачскрин)',
        price: '4500'
    },
    {
        service: 'Задняя крышка / Корпус',
        price: '3500'
    },
    {
        service: 'Кнопка включения / Боковые кнопки',
        price: '2000'
    },
    {
        service: 'Кнопка Home',
        price: '2000'
    },
    {
        service: 'Микрофон / Разъем зарядки',
        price: '2000'
    },
    {
        service: 'Разговорный / Музыкальный динамик',
        price: '2000'
    },
    {
        service: 'Прошивка (при наличии apple id и пароля)',
        price: '2000'
    }
]


// Core
// export const PhonesList = await fetchData('http://127.0.0.1:8000/api/Core/PhonesAPIView')
// export const PhonesOptions = await fetchData('http://127.0.0.1:8000/api/Core/PhonesOptionsAPIView')
// export const AccessoriesList = await fetchData('http://127.0.0.1:8000/api/Core/AccessoriesAPIView')
// export const AccessoriesOptionsList = await fetchData('http://127.0.0.1:8000/api/Core/AccessoriesOptionsAPIView')
// export const CoversList = await fetchData('http://127.0.0.1:8000/api/Core/CoversAPIView')
// export const IMacList = await fetchData('http://127.0.0.1:8000/api/Core/IMacAPIView')
// export const IMacOptionsList = await fetchData('http://127.0.0.1:8000/api/Core/IMacOptionsAPIView')

// // BaseSetting
// export const ImagesProductList = await fetchData('http://127.0.0.1:8000/api/BaseSettings/ImagesProductAPIView')
// export const ColorProductList = await fetchData('http://127.0.0.1:8000/api/BaseSettings/ColorProductAPIView')
// export const MemoryProductsList = await fetchData('http://127.0.0.1:8000/api/BaseSettings/MemoryProductsAPIView')
// export const SIMProductList = await fetchData('http://127.0.0.1:8000/api/BaseSettings/SIMProductAPIView')
// export const ManufacturerAPIView = await fetchData('http://127.0.0.1:8000/api/BaseSettings/ManufacturerAPIView')