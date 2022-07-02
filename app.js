function reverseInteger(num) {
  let limit = Math.pow(2, 31) - 1;
  let negativeLimit = Math.pow(-2, 31);

  let str = num.toString();
  let res = '';
  if (str.substring(0, 1) === '-') {
    res += Number(
      str.substring(0, 1) +
        str.substring(1, str.length).split('').reverse().join('')
    );
  } else {
    res += str.split('').reverse().join('');
  }

  if (res > limit || res < negativeLimit) {
    return 0;
  } else return res;
}

console.log(reverseInteger(9875688222));
