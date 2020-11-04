import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #17232C;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    z-index: 3;
    top: 5%;
    right: 5%;
    background: transparent;
    border-radius: 100px;
`

export const TitleModal = styled.Text`
    position: relative;
    left: -15%;
    font-size: 20px;
    font-family: Sansita;
    color: #e1e1e1;
    margin-top: 10%;
`

export const ContainerCards = styled.ScrollView`
    margin: 10px;
`

export const Card = styled.View`
    padding: 20px;
    border: 0.5px solid #e1e1e1;
    background: transparent;
    margin: 15px;
`
export const TitleCard = styled.Text`
    font-size: 20px;
    font-family: Sansita;
    color: #e1e1e1;
    margin: 10px 0;
`

export const TextCard = styled.Text`
    font-size: 14px;
    font-family: Sansita;
    color: #e1e1e1;
`

export const Buttons = styled.View`
    position: absolute;
    top: -8%;
    left: -5%;
    flex-direction: row;
`

export const ButtonCard = styled.TouchableOpacity`
    border-radius: 100px;
    padding: 10px;
    margin: 0 5px;
`