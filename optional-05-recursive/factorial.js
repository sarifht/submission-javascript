function factorial(n) {
  // Base case
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  } else if (n === 0 || n === 1) {
    return 1;
  }

  // Recursion
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
