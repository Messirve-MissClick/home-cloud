// const crypto = require('crypto');

// const algorithm = 'aes-256-ctr'; // store in .ENV file
// const secretKey = 'vOVH6sdmpNWjRRIqCc8rdxs01lwHzfr3'; // Sotre in .ENV file
// const iv = crypto.randomBytes(16);

// const encrypt = (text) => {

//     const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

//     const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

//     return encrypted.toString('hex')
// };

// const decrypt = (hash) => {

//     const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

//     const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);

//     return decrpyted.toString();
// };

// let encrypted = encrypt('HOLA BUENAS');

// console.log(encrypted);

// let decripted = decrypt(encrypted);

// console.log(decripted);