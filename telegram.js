const form = document.querySelector('.main-order-form');
const fields = form.querySelectorAll('.field');
const status = document.querySelector('.stock');

form.addEventListener('submit', (e) => {
  e.preventDefault();
	let token = '6115270329:AAF5X3QMXoih0QWaVRJ-vALI0z2Q6g3bj4s';
	let chat_id = '-745969121';
  // зчитуємо значення полів вводу
  const formData = {};
  fields.forEach((field) => {
    formData[field.name] = field.value;
  });

  // відправляємо дані форми у телеграм бота
  axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chat_id,
    text: `
      Нове замовлення:
      Кількість одиниць: ${formData.count}
      Ім'я: ${formData.name}
      Телефон: ${formData.phone}
    `
  }).then((response) => {
    // якщо запит вдалося відправити, то виводимо відповідний статус
	document.querySelector('.stock').textContent = "Дякуємо! Ваше замовлення успішно відправлено. Ми зв'яжемося з вами за телефоном.";

  }).catch((error) => {
    // якщо запит не вдалося відправити, то виводимо відповідний статус
	document.querySelector('.stock').textContent = 'На жаль, сталася помилка при відправці замовлення. Спробуйте ще раз пізніше або зв\'яжіться з нами за телефоном.'

  });
});
