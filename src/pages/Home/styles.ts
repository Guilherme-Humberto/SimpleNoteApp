import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    height: 100%;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: #e1e1e1;
    font-family: Sansita;
    text-align: left;
    font-style: normal;
    margin-top: 3%;
    padding: 3% 5%;
`
export const Desc = styled.Text`
    font-size: 17px;
    color: #e1e1e1;
    text-align: left;
    font-family: Sansita;
    padding: 3% 5%;
`

export const ContainerButton = styled.View`
    flex-direction: row;
`

export const ButtonAcess = styled.TouchableOpacity`
    border-radius: 25px;
    background: #17232C;
    padding: 5px;
    margin: 10px;
    width: 120px;
`
export const TextButton = styled.Text`
    font-size: 18px;
    color: #e1e1e1;
    font-family: Sansita;
    margin: 10px 0;
    text-align: center;
`

export const ContainerCards = styled.View`
    flex-direction: column;
    margin: 10px 0;
`

export const Card = styled.View`
    width: 100%;
    margin: 10px 0;
    padding: 10px 20px;
    background: #17232C;
`

export const ContentTop = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`

export const TextCard = styled.Text`
    font-size: 28px;
    font-family: Sansita;
    color: #e1e1e1;
    margin: 0 20px;
`
export const DescCar = styled.Text`
    font-size: 19px;
    font-family: Sansita;
    margin: 10px 0;
    color: #e1e1e1;
    max-width: 400px;
`
export const Label = styled.Text`
    font-size: 19px;
    font-family: Sansita;
    color: #e1e1e1;
    margin: 10px 0;
`

export const Input = styled.TextInput`
    width: 100%;
    background: #323F49;
    margin: 0 5px;
    padding: 10px;
    color: #e1e1e1;
    font-size: 13px;
    font-family: Roboto;
    font-weight: bold;
    border-radius: 5px;
`

export const ButtonCad = styled.TouchableOpacity`
    background: #323F49;
    width: 130px;
    padding: 10px;
    border-radius: 5px;
    margin: 20px 5px;
`
export const ButtonCadText = styled.Text`
    font-size: 16px;
    font-family: Sansita;
    color: #e1e1e1;
    text-align: center;
`