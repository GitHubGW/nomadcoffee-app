import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { RootStackParamList } from "../types/stack.types";

type EnterNavigationProps = NativeStackScreenProps<RootStackParamList, "StackEnter">;

const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.View`
  width: 80%;
`;

const StackEnter = ({ navigation }: EnterNavigationProps) => {
  return (
    <Container>
      <Logo />
      <Buttons>
        <Button loading={false} onPress={() => navigation.navigate("StackCreateAccount")} text="계정 생성" />
        <Button loading={false} onPress={() => navigation.navigate("StackLogin", { username: "", password: "" })} text="로그인" />
      </Buttons>
    </Container>
  );
};

export default StackEnter;
