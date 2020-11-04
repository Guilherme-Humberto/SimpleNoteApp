import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    z-index: 1;
    justify-content: center;
    padding: 10%;
    height: 100%;
    width: 100%;
    background: #17232C;
`;

export const TitleCard = styled.Text`
    font-size: 33px;
    font-family: Sansita;
    color: #e1e1e1;
`

export const DescCard = styled.Text`
    font-size: 17px;
    font-family: Sansita;
    color: #e1e1e1;
`

export const FormCard = styled.View`
    margin: 8% 0;
`

export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    right: 6%;
    top: 6%;
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