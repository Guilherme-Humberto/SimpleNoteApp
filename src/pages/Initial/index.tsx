import React, { useState, useCallback } from 'react';
import { Text, Button, FlatList } from 'react-native';
import Fetcher from '../../hooks/Fetcher';
import Icon from 'react-native-vector-icons/AntDesign'

import {
  Container,
  Head,
  Title,
  Desc,
  ContainerCards,
  Card,
  TitleCard,
  TextCard,
  Buttons,
  ButtonCard,
  ButtonNav
} from './styles';
import ModalNav from '../../components/ModalNav';
import api from '../../services/api';

interface Props {
  navigation: any
}

const Initial: React.FC<Props> = ({ navigation }) => {
  const [modalNav, setModalNav] = useState(false)
  const { data, mutate } = Fetcher("notes/1")

  const handleDeleteNote = useCallback(async (id: number) => {
    await api.delete(`notes/${id}`)
      .then(() => console.log(id))

    const teste = data?.map((item: any) => {
      if(item.id === id) {
        return {...item}
      }

      return item
    })

    mutate(teste, false)
  }, [data, mutate])

  if (!data) return <Title style={{ marginTop: 40 }}>Carregando...</Title>
  return (
    <>
      <Container>
        <Head>
          <Title>Bem vindo Guilherme Humberto</Title>
          <Desc>Revise e crie novas anotações</Desc>
        </Head>

        <ContainerCards>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Card>
                <Buttons>
                  <ButtonCard onPress={() => handleDeleteNote(item._id)} style={{ backgroundColor: "#387894" }}>
                    <Text><Icon size={16} name="close" color="#e1e1e1" /></Text>
                  </ButtonCard>
                  <ButtonCard style={{ backgroundColor: "orange" }}>
                    <Text><Icon size={16} name="edit" color="#e1e1e1" /></Text>
                  </ButtonCard>
                  <ButtonCard style={{ backgroundColor: "#A34848" }}>
                    {item.favorite == true ? (
                      <Text><Icon size={16} name="heart" color="#e63946" /></Text>
                    ) : (
                        <Text><Icon size={16} name="hearto" color="#e1e1e1" /></Text>
                      )}
                  </ButtonCard>
                  <ButtonCard style={{ backgroundColor: "#439438" }}>
                    <Text><Icon size={16} name="sharealt" color="#e1e1e1" /></Text>
                  </ButtonCard>
                </Buttons>
                <TextCard>{item.createAt}</TextCard>
                <TitleCard>{item.title}</TitleCard>
                <TextCard>{item.note}</TextCard>
              </Card>
            )}
          />
        </ContainerCards>
      </Container>
      <ButtonNav onPress={() => setModalNav(true)}>
        <Icon name="plus" size={30} />
      </ButtonNav>

      {modalNav && (
        <ModalNav
          buttonCloseModal={() => setModalNav(false)}
        />
      )}
    </>
  );
};

export default Initial;
