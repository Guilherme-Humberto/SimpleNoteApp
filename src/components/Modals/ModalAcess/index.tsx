import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import { 
  Container,
  FormCard,
  TitleCard,
  DescCard,
  ButtonCloseModal,
} from './styles';

interface Props {
  buttonCloseModal: any,
  title: string
  desc: string,
  form: any
}

const ModalAcess: React.FC<Props> = ({ 
  buttonCloseModal,
  title,
  desc,
  form
}) => {
  return (
    <Container>
      <ButtonCloseModal onPress={buttonCloseModal}>
        <Icon name="close" size={35} color="#e1e1e1"/>
      </ButtonCloseModal>
      <TitleCard>{title}</TitleCard>
      <DescCard>{desc}</DescCard>
      
      <FormCard>
        {form}
      </FormCard>
    </Container>
  );
};

export default ModalAcess;
