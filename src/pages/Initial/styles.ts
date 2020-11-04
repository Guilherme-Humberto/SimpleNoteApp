import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 10% 0;
`;
export const Head = styled.View`
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-size: 24px;
    font-family: Sansita;
    color: #e1e1e1;
`;
export const Desc = styled.Text`
    font-size: 17px;
    font-family: Sansita;
    color: #e1e1e1;
`;

export const ContainerCards = styled.View`
    margin: 10% 0;
`

export const Card = styled.View`
    padding: 20px;
    background: #17232C;
    margin: 15px 10px;
`
export const TitleCard = styled.Text`
    font-size: 20px;
    font-family: Sansita;
    color: #e1e1e1;
    margin: 5px 0;
`

export const TextCard = styled.Text`
    font-size: 14px;
    font-family: Sansita;
    color: #e1e1e1;
`

export const Buttons = styled.View`
    position: absolute;
    top: -8%;
    right: -2%;
    flex-direction: row;
`

export const ButtonCard = styled.TouchableOpacity`
    border-radius: 100px;
    padding: 13px;
    margin: 0 5px;
`
export const ButtonNav = styled.TouchableOpacity`
    position: absolute;
    z-index: 2;
    background: #ccc;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    bottom: 5%;
    right: 5%;
`
