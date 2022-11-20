function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    let binario = numero.toString(2);
    return binario;
  } else {
    let hexadecimal = numero.toString(16);
    return hexadecimal;
  }
}
