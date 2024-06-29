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
      email.value = savedFormData.email || '';
      message.value = savedFormData.message || '';
    }
  }
  
  function onFormSubmit(e) {
    e.preventDefault();
    if (email.value === "" || message.value === "") {
      alert('Please fill all fields');
      return;
    }
    console.log('Data sent successfully');
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
  
  function onFormInput(event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    if (email.value === "" || message.value === "") {
      return;
    }
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('input', onFormInput);
  
  document.addEventListener('DOMContentLoaded', populateTextareaField);
  
  
  // function onTextareaInput(event) {
  //   formData.email = email.value;
  //   formData.message = message.value;
  //   console.log(event.target.value);
  //   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  // }
  
  document.addEventListener('DOMContentLoaded', populateTextareaField);
  