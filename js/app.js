//selectors
const input = document.getElementById('mail-input');
const btn = document.getElementById('submit-btn');

//event listener
btn.addEventListener(
  'click',
  (e) => {
    e.preventDefault();

    const email = input.value;

    if (validateEmail(email) && email != null) {
      email = '';
      console.log(email);

      return alert('SUCCESS!');
    } else {
      return alert('Please check your email input');
    }
  },
  false
);

function validateEmail(email) {
  const validate = /\S+@\S+\.\S+/;
  return validate.test(email);
}
