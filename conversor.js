function conversorDec() {
  let valorDec = document.querySelector('#decNum').value;
  var convertDec = (valorDec >>> 0).toString(2);

  if(valorDec === '') {
    return alert('Insira um número');
  }

  document.querySelector('#binNum').value = convertDec;
  return true;
}
function conversorBin() {
  let valorBin = document.querySelector('#binNum1').value;
  var convertBin = parseInt(valorBin, 2).toString(10);

  if(valorBin === '') {
    return alert('Insira um número');
    }
  valorBin.split('').map((char) => {
    if(char !== '0' && char !== '1'){
      return alert('Insira um número binário')};
  });

  document.querySelector('#decNum1').value = convertBin;
  return true;
}