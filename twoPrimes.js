function twoPrimes(a, b) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if(isPrime(a) && isPrime(b)){
      console.log("True")
    }
    else{
      console.log("False")
    }
}

