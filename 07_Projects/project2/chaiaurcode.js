const form = document.querySelector("form");

form.addEventListener('click', (e) => {
  e.preventDefault();

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let result = document.querySelector('#results');

  if (height == "" || height < 0 || height == 0) {
    result.innerHTML = `Enter valid height: ${height}`;
  } 
  else if (weight == "" || weight < 0 || weight == 0) {
    result.innerHTML = `Enter valid weight: ${weight}`;
  } 
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<p>Your BMI is: ${bmi}</p>`;
  }
});
