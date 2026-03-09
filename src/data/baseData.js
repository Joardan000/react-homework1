// Rasmlarni import qilish
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
// Oxirgi 4 ta rasm ham assets ichida bo'lsa:
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';

export const products = [
    {
        id: 1,
        name: "Smartfon Xiaomi Redmi Note 13, 6/128 GB, 8/128 GB, 8/256 GB",
        img: img1,
        rating: 5.0,
        reviews: 1,
        installment: "297 480 so'm/oyiga",
        oldPrice: "4 997 000 so'm",
        newPrice: "2 479 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 2,
        name: "Zarbga chidamli smartfon Honor X9b 5G, 8/12/256 GB, 6,78 OLED",
        img: img2,
        rating: 5.0,
        reviews: 1,
        installment: "478 800 so'm/oyiga",
        oldPrice: "6 000 000 so'm",
        newPrice: "3 990 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 3,
        name: "The Act ko'z atrofi, qora doiralar qarshi ko'z kremi, ko'k choy",
        img: img3,
        rating: 5.0,
        reviews: 8,
        installment: "13 080 so'm/oyiga",
        oldPrice: "289 000 so'm",
        newPrice: "109 000 so'm",
        sale: true,
        discount: false
    },
    {
        id: 4,
        name: "Yuz kremi vitamin C bilan, The Act, namlantiradi va terini oziqlantiradi",
        img: img4,
        rating: 5.0,
        reviews: 8,
        installment: "13 080 so'm/oyiga",
        oldPrice: "289 000 so'm",
        newPrice: "109 000 so'm",
        sale: true,
        discount: false
    },
    {
        id: 5,
        name: "Bogema etajerka, chaq chuq solish uchun, 2 donasini narxi",
        img: img5,
        rating: 5.0,
        reviews: 1,
        installment: "35 880 so'm/oyiga",
        oldPrice: "650 000 so'm",
        newPrice: "299 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 6,
        name: "Chizma dastgohi, ikki tomonlama, markerli, rangli qalamlar, magnitli",
        img: img6,
        rating: 5.0,
        reviews: 2,
        installment: "35 880 so'm/oyiga",
        oldPrice: "600 000 so'm",
        newPrice: "299 000 so'm",
        sale: false,
        discount: false
    },
    {
        id: 7,
        name: "Smartfon Xiaomi Redmi Note 13 Pro+ 5G, curved display, AMOLED 120Hz",
        img: img7,
        rating: 5.0,
        reviews: 2,
        installment: "645 480 so'm/oyiga",
        oldPrice: "7 000 000 so'm",
        newPrice: "5 379 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 8,
        name: "Noutbuk HP AMD Ryzen 7-5825U, DDR4 16GB SSD 512GB, 15.6\" FHD",
        img: img8,
        rating: 5.0,
        reviews: 3,
        installment: "864 000 so'm/oyiga",
        oldPrice: "8 200 000 so'm",
        newPrice: "7 200 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 9,
        name: "Chopper maydalagich 5 tasi 1 da, 3.5 litrli, elektr va qo'lda ishlaydigan",
        img: img9,
        rating: 5.0,
        reviews: 1,
        installment: "35 880 so'm/oyiga",
        oldPrice: "500 000 so'm",
        newPrice: "299 000 so'm",
        sale: true,
        discount: false
    },
    {
        id: 10,
        name: "Erkaklar va ayollar krossovkalari, dizaynerlik, sport, yurish",
        img: img10,
        rating: 5.0,
        reviews: 1,
        installment: "46 800 so'm/oyiga",
        oldPrice: "650 000 so'm",
        newPrice: "390 000 so'm",
        sale: false,
        discount: false
    },
    {
        id: 11,
        name: "Televizor Samsung Crystal UHD 4K 43\", 50\", 55\", 65\" CU7100 Smart TV",
        img: img11,
        rating: 5.0,
        reviews: 5,
        installment: "587 880 so'm/oyiga",
        oldPrice: "5 830 000 so'm",
        newPrice: "4 899 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 12,
        name: "Avtomobil va uy uchun portativ, simsiz, kuchli JB-107 changyutgic...",
        img: img12,
        rating: 4.7,
        reviews: 32,
        installment: "23 880 so'm/oyiga",
        oldPrice: "620 000 so'm",
        newPrice: "199 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 13,
        name: "Sumka shopper ayollar uchun, yelkama, charmdan, eko zamsh...",
        img: img13,
        rating: 5.0,
        reviews: 4,
        installment: "11 880 so'm/oyiga",
        oldPrice: "400 000 so'm",
        newPrice: "99 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 14,
        name: "Smartfon Xiaomi Redmi Note 13 Pro, 8/256 ГБ, 12/512 ГБ, 6.67\", 1...",
        img: img14,
        rating: 5.0,
        reviews: 6,
        installment: "448 680 so'm/oyiga",
        oldPrice: "6 000 000 so'm",
        newPrice: "3 739 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 15,
        name: "Yostiqlar to'plami, bambukdan, gipoallergenli, ekologik toza, 70 *...",
        img: img15,
        rating: 4.9,
        reviews: 165,
        installment: "10 680 so'm/oyiga",
        oldPrice: "197 000 so'm",
        newPrice: "89 000 so'm",
        sale: true,
        discount: true
    },
    {
        id: 16,
        name: "Erkaklar sport to'plami, xudi shim bilan, qora",
        img: img16,
        rating: 4.9,
        reviews: 237,
        installment: "23 400 so'm/oyiga",
        oldPrice: "320 000 so'm",
        newPrice: "195 000 so'm",
        sale: true,
        discount: true
    }
];