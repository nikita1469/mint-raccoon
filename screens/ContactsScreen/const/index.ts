export const CONTACTS_FIELDS_DATA = [
  { id: "workingHours", label: "Время работы:" },
  { id: "address", label: "Адрес:" },
  { id: "phone", label: "Телефон:" },
  { id: "socials", label: "Социальные сети:" },
];

export const CONTACTS_FORM_DATA = {
  workingHours: {
    firstRow: "Пн-пт: 11:00-05:00",
    secondRow: "Сб-вс: 12:00-05:00",
  },
  address: "Верхняя Радищевская улица, 5, Москва",
  phone: "+70000000000",
  socials: {
    telegram: "t.me/restaurant",
    vk: "vk.com/restaurant"
  }
};

export const LOCATIONS_DATA = [
  { id: 1, name: "Зал «Сакура»", image: require("@/shared/assets/images/sakura.png") },
  { id: 2, name: "Зал «ЕНОТ»", image: require("@/shared/assets/images/racoon.png") },
  { id: 3, name: "ВИП «ДЕНЬ»", image: require("@/shared/assets/images/day.png") },
  { id: 4, name: "ВИП «НОЧЬ»", image: require("@/shared/assets/images/night.png") },
];
