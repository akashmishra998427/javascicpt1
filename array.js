let num = 23;

function isPrime(num) {
  if (num == 1) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(1));