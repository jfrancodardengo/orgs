import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Estrela from './Estrela';

function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quanitade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          preenchida={i < quanitade}
          desabilitada={!editavel}
          grande={grande}
        />,
      );
    }

    return listaEstrelas;
  };
  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
export default Estrelas;
