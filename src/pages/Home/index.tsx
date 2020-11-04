import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'

import ModalAcess from '../../components/Modals/ModalAcess';
import { 
  Container,
  Title,
  Desc,
  ContainerButton,
  ButtonAcess,
  TextButton,
  ContainerCards,
  Card,
  ContentTop,
  TextCard,
  DescCar,
  Label,
  Input,
  ButtonCad,
  ButtonCadText
} from './styles';

import api from '../../services/api';

interface Props {
  navigation: any
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [modallog, setModalLog] = useState(false)
  const [modalcad, setModalCad] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmitLogin = async () => {
    await api.post("/login", { email, password })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }

  const handleSubmitRegister = async () => {
    await api.post("register", { name, email, password })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Title>SimpleNote</Title>
      <Desc>
        Mantenha a organização com blocos de anotações que você pode dividir em seções e páginas. 
        Com navegação e pesquisa fáceis, você sempre encontra as anotações exatamente onde as deixou.
      </Desc>
      <ContainerButton>
        <ButtonAcess onPress={() => setModalCad(true)}>
          <TextButton>Cadastrar</TextButton>
        </ButtonAcess>
        <ButtonAcess onPress={() => setModalLog(true)}>
          <TextButton>Acessar</TextButton>
        </ButtonAcess>
      </ContainerButton>

      <ContainerCards>
        <Card>
          <ContentTop>
            <Icon name="documents" color="#e1e1e1" size={30}/>
            <TextCard>Organize</TextCard>
          </ContentTop>
          <DescCar>
          Classifique o conteúdo em blocos de anotações, seções e páginas.
          </DescCar>
        </Card>

        <Card>
          <ContentTop>
            <Icon2 name="sharealt" color="#e1e1e1" size={30}/>
            <TextCard>Compartilhe</TextCard>
          </ContentTop>
          <DescCar>
          Compartilhe blocos de anotações com colegas de trabalho, amigos e familiares.
          </DescCar>
        </Card>
      </ContainerCards>

      {modalcad && (
        <ModalAcess 
          buttonCloseModal={() => setModalCad(false)}
          title="Criar Conta"
          desc="Pronto para anotar suas ideias e organizar o seu dia? Então não perca mais tempo. Crie sua conta."
          form={
            <>
              <Label>Nome e Sobrenome</Label>
              <Input 
                value={name}
                onChangeText={(e) => setName(e)} 
                placeholderTextColor="#e1e1e1" 
                placeholder="Nome" 
              />
              <Label>Email</Label>
              <Input 
                value={email}
                onChangeText={(e) => setEmail(e)} 
                placeholderTextColor="#e1e1e1" 
                placeholder="E-Mail" 
              />
              <Label>Senha</Label>
              <Input
                value={password}
                onChangeText={(e) => setPassword(e)}  
                placeholderTextColor="#e1e1e1" 
                placeholder="Senha" 
              />
              <ButtonCad onPress={handleSubmitRegister}>
                <ButtonCadText>Cadastrar</ButtonCadText>
              </ButtonCad>
            </>
          }
        />
      )}

      {modallog && (
        <ModalAcess
          buttonCloseModal={() => setModalLog(false)}
          title="Acessar"
          desc="Quem bom que você está de volta, está na hora de revisar suas notas"
          form={
            <>
              <Label>Email</Label>
              <Input 
                value={name}
                onChangeText={(e) => setName(e)} 
                placeholderTextColor="#e1e1e1" 
                placeholder="E-Mail" 
              />
              <Label>Senha</Label>
              <Input 
                value={password}
                onChangeText={(e) => setPassword(e)} 
                placeholderTextColor="#e1e1e1" 
                placeholder="Senha" 
              />
              <ButtonCad onPress={handleSubmitLogin}>
                <ButtonCadText>Acessar</ButtonCadText>
              </ButtonCad>
            </>
          }
        />
      )}
    </Container>
  );
};

export default Home;
