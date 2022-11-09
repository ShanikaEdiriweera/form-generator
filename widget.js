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
  createInput(entry, myForm);
});

function createInput(entry, parent) {
  const [key, value] = entry;

  const div = document.createElement('div');

  const label = document.createElement('label');
  const labelText = document.createTextNode(key);
  // label.innerText = key;
  const input = document.createElement('input');
  input.value = value;
  // input.id = key;

  if (Number.isInteger(value)) {
    input.setAttribute('type', 'number');
  } 
  
  if (typeof value === 'object') {
    const group = document.createElement('fieldset');
    Object.entries(value).forEach(entry => {
      createInput(entry, group);
    });
    parent.appendChild(group);
  } else {
    // label.setAttribute('for', input.id);
    label.appendChild(labelText);
    label.appendChild(input);

    div.appendChild(label);
    // div.appendChild(input);
  
    parent.appendChild(div);
  
    input.addEventListener('input', () => {
      console.log(model);
    })
  }
}