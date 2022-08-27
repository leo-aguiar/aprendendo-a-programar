// Números Primos

let num = 15
let primo = true

for (i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false
        break
    }
}
if (primo == true) {
    console.log(`Sim, o número ${num} é primo`)
} else {
    console.log(`Não, o número ${num} não é primo`)
}