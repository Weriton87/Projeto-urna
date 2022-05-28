let SeuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descriçao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
function começarEtapa() {

    let etapa = etapas[etapaAtual];

    let numeroHtml ="";

    for(let i=0;i<etapa.numeros;i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
        numeroHtml += '<div class="numero"></div>';
    }

    }

    SeuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descriçao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}
function AtualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
    if (item.numero === numero) {
        return true;
    } else {
        return false;
    }
  });
  if (candidato.length > 0) {
      candidato = candidato[0];
      SeuVotoPara.style.display = 'block';
      aviso.style.display = 'block';
      descriçao.innerHTML = `nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

      let fotosHtml = '';
        for(let i in candidato.fotos) {
          fotosHtml += `<div class="d-1image"><img src="./imagens/ ${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
        }

      lateral.innerHTML = fotosHtml;
    }
}
  

function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');
    if (elnumero !== null) {
    elnumero.innerHTML = n;
    numero = '$(numero)$(n)';
    elnumero.classList.remove('pisca');
    elnumero.nextElementSibling.classList.add('pisca');
}else {
    AtualizaInterface();
}
}
function Branco(n) {
    alert ("clicou em Branco")
}

function Corrige(n) {
    alert ("clicou em Corrige")
}

function Confirma(n) {
    alert ("clicou em Confirma")
}

começarEtapa();
