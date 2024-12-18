function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

// Stricter input validation prevents runtime errors
try {
  let result = add(1, 2); 
  console.log(result); // Outputs 3
  let result2 = add("1",2); // throws error
  console.log(result2);
} catch (e) {
  console.error(e);
}

