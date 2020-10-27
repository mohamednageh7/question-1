function customePrint(n, message) {
  if (n === 1) {
    return console.log(message);
  }
  console.log(message);
  return customePrint(n - 1, message);
}

customePrint(5, "Hello, World");
