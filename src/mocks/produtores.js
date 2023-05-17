import green from '../assets/green.png';
import grow from '../assets/grow.png';
import jennyJack from '../assets/jenny-jack.png';
import potager from '../assets/potager.png';
import salad from '../assets/salad.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
