/*
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    const error = formValidate(form);
    const formData = new FormData(form);

    if (error === 0) {
      const response = await fetch('sendmail.php', {});
    } else {
      alert('Check your input in red area');
    }
  }

  function formValidate(form) {
    let error = 0;
    const formControl = document.querySelectorAll('.form-control');

    for (let i = 0; i < formControl.length; i++) {
      const input = formControl[i];
      removeError(input);

      if (input.classList.contains('_email')) {
        if (emailWrong(input)) {
          addError(input);
          error++;
        }
      } else if (input.value === '') {
        addError(input);
        error++;
      }
    }

    return error;
  }

  function emailWrong(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
  }

  function addError(input) {
    input.classList.add('_error');
  }

  function removeError(input) {
    input.classList.remove('_error');
  }
});
*/
