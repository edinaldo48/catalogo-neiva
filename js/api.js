function limparCampos() {
  document.getElementById('ref').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('descricao').value = '';
  const file = document.querySelector("[data-imgFile]");
  file.textContent = '';
  file.classList.remove('show');
}


window.onload = function () {

  const ref = document.getElementById('ref');
  const preco = document.getElementById('preco');
  const descricao = document.getElementById('descricao');
  const img = document.querySelector("#select");;
  const file = document.querySelector("[data-imgFile]");
  const enviar = document.querySelector('[data-send]');
  

  var imgPath = null;

  img.addEventListener('change', (e) => {
      var fReader = new FileReader();
      fReader.readAsDataURL(img.files[0]);
      fReader.onloadend = function (event) {
        imgPath = event.target.result;
        file.textContent = img.files[0].name;
        file.classList.add('show');
      }
    })
  


  enviar.addEventListener('click', (e) => {
    e.preventDefault();
    preco.value = preco.value.replace(',', '.')
    const formArea = [ref.value, preco.value, descricao.value, imgPath];
    var send = true;

    // for (let i in formArea) {
    //   if (!formArea[i]) {
    //     ExibirMensagem('msg--erro');
    //     send = false;
    //     break;
    //   }
    // }


    if (send) {

      const novoProduto = {        
        descricao: descricao.value,
        imagem: imgPath,
        preco: Number(preco.value).toFixed(2),
        ref: ref.value
      }

      const produto = JSON.parse(localStorage.getItem('lista')) || [];
      const add = [...produto, novoProduto];
      localStorage.setItem('lista', JSON.stringify(add));

      // ExibirMensagem('msg--enviar');

      limparCampos();
    }
  })

}
