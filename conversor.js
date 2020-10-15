  function conversorDec() {
  let valorDec = document.querySelector('#decNum').value;
  var convertDec = (valorDec >>> 0).toString(2);

  if(valorDec === '') {
    return alert('Insert a number');
  }

  document.querySelector('#binNum').value = convertDec;
  return true;
}
function conversorBin() {
  document.querySelector('#decNum1').value = ''
  let valorBin = document.querySelector('#binNum1').value;
  var convertBin = parseInt(valorBin, 2).toString(10);

  if(valorBin === '') {
    return alert('Insert a number');
    }
    valorBin.split(' ').map((value) => {
      if (/[^01]/.test(value)) {
        document.querySelector('#decNum1').value = "Non binary";
        return alert("This isn't a binary number")
      } else {
        document.querySelector('#decNum1').value = convertBin;
        return true;
      }
    });
}