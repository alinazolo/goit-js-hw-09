const formEL = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[type="email"]'),
    message: document.querySelector('textarea')
  };
  
  const { form, email, message } = formEL;
  
  const formData = { 
    email: "", 
    message: ""
  };
  
  function populateTextareaField() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
      email.value = savedFormData.email.trim() || '';
      message.value = savedFormData.message.trim() || '';
      formData = savedFormData;
    }
  }
  
  function onFormSubmit(e) {
    e.preventDefault();
    if (email.value.trim() === "" || message.value.trim() === "") {
      alert('Please fill all fields');
      return;
    }
    console.log('Form data:', formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
  
  function onFormInput(event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  console.log(formData);
  }
  
  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('input', onFormInput);
  
  
  document.addEventListener('DOMContentLoaded', populateTextareaField);
  