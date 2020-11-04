import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    flex-direction: column;
    z-index: 2;
    background: #ccc;
    width: 70px;
    height: 240px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    bottom: 5%;
    right: 5%;
`;

export const Button = styled.TouchableOpacity`
    background: #adb5bd;
    padding: 15px;
    border-radius: 100px;
    margin: 10px 0;
`