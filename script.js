const cadfunc = document.querySelector('#cadastrar');
const btnLista = document.querySelector('#btnLista');

const salvarBtn = document.querySelector('#salvar')
const voltarBtn = document.querySelector('#voltar')
const btnSair = document.querySelector('#btnSair')


const telaInicial = document.querySelector('.type-action');
const telacad = document.querySelector('.telaDeCadastro');
const telaList = document.querySelector('.listaFunc');

cadfunc.addEventListener('click', () => {
  telaInicial.classList.add('hidden');
  telaInicial.classList.remove('flex');
  telacad.classList.add('grid');
  telaList.classList.remove('grid');
  telaList.classList.add('hidden');
});

voltarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  voltar();
});

btnLista.addEventListener('click', () => {
  telaList.classList.remove('hidden');
  telaList.classList.add('grid');
  telacad.classList.add('hidden');
  telacad.classList.remove('grid');
  telaInicial.classList.add('hidden');
  telaInicial.classList.remove('flex');
})

btnSair.addEventListener('click', voltar)

function voltar() {
  telaInicial.classList.remove('hidden');
  telaInicial.classList.add('flex');
  telacad.classList.add('hidden');
  telacad.classList.remove('grid');
  telaList.classList.add('hidden');
  telaList.classList.remove('grid');
}
