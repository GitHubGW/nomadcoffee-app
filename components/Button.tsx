import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Loading from "./Loading";

interface ButtonProps {
  loading: boolean;
  onPress: () => any;
  text: string;
}

const ButtonTouchableOpacity = styled.TouchableOpacity`
  background-color: white;
  margin-top: 10px;
  border-radius: 50px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: black;
  text-align: center;
`;

const Button = ({ loading, onPress, text }: ButtonProps) => {
  return (
    <ButtonTouchableOpacity onPress={onPress}>
      <ButtonText>{loading ? <Loading color="black" /> : text}</ButtonText>
    </ButtonTouchableOpacity>
  );
};

export default Button;
