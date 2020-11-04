import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import api from '../../services/api';
import ModalFavorites from '../Modals/ModalFavorites';

import {
  Container,
  Button
} from './styles';

interface Props {
  buttonCloseModal: any
}

const ModalNav: React.FC<Props> = ({ buttonCloseModal }) => {
  const [modalFavorites, setModalFavorites] = useState(false)

  return (
    <>
      <Container>
        <Button onPress={buttonCloseModal}>
          <Icon
            name="close"
            color="#495057"
            size={25}
          />
        </Button>
        <Button onPress={() => setModalFavorites(true)}>
          <Icon
            name="heart"
            color="#495057"
            size={25}
          />
        </Button>
        <Button>
          <Icon
            name="plus"
            color="#495057"
            size={25}
          />
        </Button>
      </Container>

      {modalFavorites && (
          <ModalFavorites 
            buttonCloseModal={() => setModalFavorites(false)}
          />
      )}
    </>
  );
};

export default ModalNav;
