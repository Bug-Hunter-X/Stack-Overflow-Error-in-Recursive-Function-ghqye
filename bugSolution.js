function foo(a, b) {
  while (a > 0) {
    b += a;
    a--;
  }
  return b;
}

//Another solution using a loop:
function foo2(a, b) {
  let result = b;
  for (let i = 0; i < a; i++) {
    result += (a - i);
  }
  return result;
}