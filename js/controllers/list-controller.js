function State() {
    this.listSection = null;
}

const state = new State();

export function init() {
    state.listSection = document.querySelector("#list-section");
}

export function addCard(address){
    const card = createCard(address);
    state.listSection.appendChild(card);
}

function handleTrashClick(event){
    event.preventDefault();
    const element = event.target.parentElement.parentElement;
    removeCard(element);
}

function removeCard(element){
    element.remove();
}

function createCard(address){

    const divContainer = document.createElement("div");
    divContainer.classList.add("card-list-container")

    const div = document.createElement("div");
    div.classList.add("card-list-item");

    const divTrash = document.createElement("div");
    divTrash.classList.add("card-list-trash");

    const h3 = document.createElement("h3");
    h3.innerHTML = address.city;

    const i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-trash-o");
    i.style.fontSize = "26px";

    i.addEventListener('click', handleTrashClick);

    const line = document.createElement("p");
    line.classList.add("address-line");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("address-cep");
    cep.innerHTML = address.cep;

    divContainer.appendChild(div);
    divContainer.appendChild(divTrash);

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    divTrash.appendChild(i);

    return divContainer;
}
