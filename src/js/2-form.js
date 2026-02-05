const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey)) {
  const parsedData = JSON.parse(localStorage.getItem(localStorageKey));

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
