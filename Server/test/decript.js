const bcrypt = require('bcrypt');
const salt = '$2b$10$pEZLoOlHHLMtga5Ub5vZ5e'
const myPlaintextPassword = 'Spai422'

const hash = '$2b$10$pEZLoOlHHLMtga5Ub5vZ5efaiqilla2Ji669mVC5Jy5tuUeNGqgJa'
console.log(hash)
// const hash = ''
// const myPlaintextPassword = 'Spai422'

let x = bcrypt.compareSync(myPlaintextPassword, hash)

console.log(x);