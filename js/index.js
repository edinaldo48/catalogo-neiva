
const lista = [
  // {   descricao: "Roupa infantil feminina",
  //     imagem: "teste.png",
  //     preco: 50.0,
  //     ref: "0dsf4sd1v0255"  
  // }
]

export function updateList(){
  if(JSON.parse(localStorage.getItem('lista'))){
    const novos = JSON.parse(localStorage.getItem('lista'))
    
    novos.map((item)=>{
      lista.push(item)
    })
  }
}


export function cards(produtos){
  const main = document.getElementById('main')
  let cards = ''
  produtos.map(produto =>{
    console.log(produto);
    cards += `<div class="card">
      <img src="${produto.imagem}" alt="imagem de uma roupa"/>
      <p class="card__text">${produto.descricao}</p>
      <div class="card__infos">
        <p class="ref">Ref: <span>${produto.ref}</span></p>
        <p class="preco">Preço: <span>R$ ${produto.preco}</span></p>
      </div>
      </img>
    </div>`    
  })
  main.innerHTML = cards;
}


export function nav(paths) {

  
}

window.onload = async function () {
  
  await updateList()
  await cards(lista)
}


