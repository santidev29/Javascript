const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I’m red!';
para.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = 'I’m a blue h3!';
h3.style.color = "blue";

const div = document.createElement('div');
div.style.border = "black";
div.style.background = "pink";

const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

const p = document.createElement('p');
p.textContent = "ME TOO!";


container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);

div.appendChild(h1);
div.appendChild(p);


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });