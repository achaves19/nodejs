 import { writeFileSync, readFileSync } from 'fs';

// Escribir archivo
writeFileSync('datos.txt', 'Hola desde Node.js');

// Leer archivo
const contenido = readFileSync('datos.txt', 'utf-8');
console.log(contenido);