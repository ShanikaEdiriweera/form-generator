const model = {
  foo: 'hello world',
  bar: 'another string',
  baz: 5,
  subdata: {
    foo: 'hello world',
    bar: 'another string',
    baz: 5,
  },
};

const myForm = document.querySelector('#my-form');

Object.entries(model).forEach(entry => {
  createInput(entry);
});

function createInput(entry) {
  const [key, value] = entry;

  const div = document.createElement('div');

  const label = document.createElement('label');
  label.innerText = key;
  const input = document.createElement('input');
  input.value = value;
  input.id = key;

  if (Number.isInteger(value)) {
    input.setAttribute('type', 'number');
  } 
  
  if (typeof value === 'object') {
    Object.entries(value).forEach(entry => {
      createInput(entry);
    });
  } else {
    label.setAttribute('for', input.id);

    div.appendChild(label);
    div.appendChild(input);
  
    myForm.appendChild(div);
  
    input.addEventListener('input', () => {
      console.log(model);
    })
  }
}