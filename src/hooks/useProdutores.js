import {useState, useEffect} from 'react';

import {carregaProdutores} from '../servicos/carregaDados';

function useProdutores() {
  const [titulo, setTitutlo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitutlo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista];
}

export default useProdutores;
