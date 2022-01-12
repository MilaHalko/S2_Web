document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  const modal = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];
  const errP = document.getElementById('errMessage');
  async function formSend(e) {
    e.preventDefault();
    const error = formValidate();

    const formData = new FormData(form);

    if (error === 0) {
      console.log('Нет ошибок');
      form.classList.add('_sending');
      const response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      }).catch(() => {
        form.classList.remove('_sending');
        errP.innerHTML =
          'Ошибка отправления сообщения, отсутствует соединение с интернетом!';
        modal.style.display = 'block';

        span.onclick = function () {
          modal.style.display = 'none';
        };
      });
      if (response.ok) {
        await response.json();

        form.reset();
        form.classList.remove('_sending');
      } else {
        errP.innerHTML = 'Сообщение не было отправленно!';
        modal.style.display = 'block';

        span.onclick = function () {
          modal.style.display = 'none';
        };

        form.classList.remove('_sending');
      }
    } else {
      errP.innerHTML = 'Заполните поля выделенные красным!';
      modal.style.display = 'block';

      span.onclick = function () {
        modal.style.display = 'none';
      };
    }
  }

  function formValidate() {
    let error = 0;
    const formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index += 1) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error += 1;
        }
      } else if (input.value === '') {
        formAddError(input);
        error += 1;
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([.-]?w+)*@\w+([.-]?w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
