const reverse_words = (string) => {
  const str = string.split('')
  for(let i = 0; i < Math.ceil(str.length / 2); i++){
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str.join('');
}
