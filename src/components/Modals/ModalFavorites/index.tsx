import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Fetcher from '../../../hooks/Fetcher';

import { 
  Container,
  Content,
  TitleModal,
  ContainerCards,
  Card,
  TitleCard,
  TextCard,
  Buttons,
  ButtonCard,
  ButtonCloseModal
} from './styles';

interface Props {
  buttonCloseModal: any
}

const ModalFavorites: React.FC<Props> = ({ buttonCloseModal }) => {
  const { data } = Fetcher("notes/1")

  if(!data) return <Text>Carregando...</Text>
  console.log(data)
  return (
    <Container>
      <ButtonCloseModal onPress={buttonCloseModal}>
        <Icon name="close" color="#e1e1e1" size={35}/>
      </ButtonCloseModal>
      <Content>
          <TitleModal>Anotações Favoritas</TitleModal>
          <ContainerCards>
            {data.filter((item: any) => item.favorite == true).map((item: any) => (
              <Card key={item._id}>
              <Buttons>
                <ButtonCard style={{ backgroundColor: "#A34848" }}>
                  {item.favorite == true ? (
                    <Text><Icon size={16} name="heart" color="#e63946" /></Text>
                  ) : (
                      <Text><Icon size={16} name="hearto" color="#e1e1e1" /></Text>
                    )}
                </ButtonCard>
              </Buttons>
              <TextCard>{item.createAt}</TextCard>
              <TitleCard>{item.title}</TitleCard>
              <TextCard>{item.note}</TextCard>
            </Card>
            ))}
          </ContainerCards>
      </Content>
    </Container>
  );
};

export default ModalFavorites;
