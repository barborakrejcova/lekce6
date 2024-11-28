const today = dayjs();
const christmas = dayjs('2024-12-24');

document.body.innerHTML = `<h3>Už jsou Vánoce?</h3>`;
today.isAfter(christmas) ? document.body.innerHTML += `<p>ANO</p>` : document.body.innerHTML += `<p>NE</p>`;