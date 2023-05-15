import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quanitade, setQuantidade] = useState(quantidadeAntiga);
  const estilos = estilosFuncao(grande);
  const getImage = index => {
    if (index < quanitade) {
      return estrela;
    }
    return estrelaCinza;
  };
  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}>
          <Image style={estilos.estrela} source={getImage(i)} />
        </TouchableOpacity>,
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

const estilosFuncao = grande =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
export default Estrelas;
