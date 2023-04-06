// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (parametro) => parametro.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (parametro) =>
  `${parametro[parametro.length - 1]}, ${parametro[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  const higherNumber = Math.max(...array);
  let counts = {};
  array.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });
  return counts[higherNumber];
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height,
    )}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height,
    )}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);
  console.log(distanceCat1);
  console.log(distanceCat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (arr) => arr.map((num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzBuzz';
  } if (num % 3 === 0) {
    return 'fizz';
  } if (num % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
});
// Desafio 9 - Crie a função encode e a função decode
const encode = (text) => text
  .replace(/a/g, '1')
  .replace(/e/g, '2')
  .replace(/i/g, '3')
  .replace(/o/g, '4')
  .replace(/u/g, '5');

const decode = (text) => text
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');
// Desafio 10 - Crie a função techList
const techList = (arrTech, name) => {
  if (!arrTech || !name) {
    return [];
  }
  return arrTech.map((tech) => ({ tech, name }))
    .sort((a, b) => a.tech.localeCompare(b.tech));
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
