function add(a: number, b: number): number {
  return a + b;
}

let result = add("1", 2); // This will compile without error, but will produce unexpected result at runtime
console.log(result); //Outputs "12"