function fibonacci(n) {
  // Base case
  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  // Recursion
  const arr = fibonacci(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
