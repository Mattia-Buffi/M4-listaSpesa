// nodi
let inputItem=document.getElementById('itemAdd');
let groseryList=document.getElementById('listItems');
let cartList=document.getElementById('listOnCart');
let groceryTab=document.getElementById('groceryTab');
let cartTab=document.getElementById('cartTab');

//mostra la lista spesa o ciò gia presente nel carrello evento
groceryTab.addEventListener('click',()=>{
    cartTab.classList.remove('active');
    groceryTab.classList.add('active');
    document.getElementById('groceryList').classList.remove('d-none');
    document.getElementById('cartView').classList.add('d-none');
})
cartTab.addEventListener('click',()=>{
    cartTab.classList.add('active');
    groceryTab.classList.remove('active');
    document.getElementById('cartView').classList.remove('d-none');
    document.getElementById('groceryList').classList.add('d-none');

})

//aggiunge il prodotto alla lista della spesa 
function addProduct(){
    let newItem=document.createElement('li');
    newItem.innerHTML=(`<i class="fa-solid fa-cart-arrow-down takedPin me-2" onclick="taked(event)"></i>`+inputItem.value+`<i class="fa-solid fa-trash-can deletePin text-danger ms-2" onClick="deleteItem(event)"></i>`);
    groseryList.appendChild(newItem);
    inputItem.value='';
}
//rimuove il nodo e lo sposta nella lista del carrello rimuovneod la funzione on click
function taked(event){
    event.target.onclick='';
    event.target.classList.add('text-success');
    document.getElementById('listOnCart').appendChild(event.target.parentNode);
}
//elimina l'elemento, funziona in entrmabe le liste
function deleteItem(event){
    event.target.parentNode.remove();
}