//https://github.com/aellopos/Kurz-JS-1/blob/main/solution/lekce-06.md#mimozemsk%C3%BD-%C5%BEivot

const today = dayjs();
const christmas = dayjs('2024-12-24');

document.body.innerHTML = `<h3>Už jsou Vánoce?</h3>`;
today.isAfter(christmas) ? document.body.innerHTML += `<p>ANO</p>` : document.body.innerHTML += `<p>NE</p>`;