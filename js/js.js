
var isBlackAndWhite = false;
function pretoEBranco(){
	if (isBlackAndWhite) {
		document.getElementById('body').classList.remove('preto-branco');
		isBlackAndWhite = false;
	} else {
		document.getElementById('body').classList.add('preto-branco');
		isBlackAndWhite = true;
	}
}

function aumentar() {
	document.body.style.zoom = '150%';
}
function tamanhoNormal() {
	document.body.style.zoom = '100%';
}

function diminuir() {
	document.body.style.zoom = '75%';
}

function validar(){
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let email = document.getElementById('email').value;
  let comentario = document.getElementById('comentario').value;
  let div = document.getElementById('erro');
  let msgErro;
  if(nome == ''){
    document.getElementById('nome').focus();
    msgErro = 'Preencha o campo em destaque!';
  } else if(sobrenome == ''){
    document.getElementById('sobrenome').focus();
    msgErro = 'Preencha o campo em destaque!'
  } else if(email == ''){
    document.getElementById('email').focus();
    msgErro = 'Preencha o campo em destaque!'
  } else if(comentario == ''){
    document.getElementById('comentario').focus();
    msgErro = 'Preencha o campo em destaque!'
  } else{
    msgErro = '';
  }
  if(msgErro == ''){
    document.getElementById('form2').submit();
  } else {
    div.innerHTML = msgErro
  }
}
