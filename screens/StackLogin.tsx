import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import Button from "../components/Button";
import AuthTextInput from "../components/AuthTextInput";
import Logo from "../components/Logo";
import { RootStackParamList } from "../types/stack.types";
import { RefObject, useRef } from "react";
import KeyboardAvoidingLayout from "../components/KeyboardAvoidingLayout";
import { onFocusNext } from "../shared/shared.utils";
import { useForm } from "react-hook-form";
import { LoginMutation, useLoginMutation } from "../generated/graphql";
import { handleLogin } from "../apollo";

type LoginNavigationProps = NativeStackScreenProps<RootStackParamList, "StackLogin">;

interface LoginFormData {
  username: string;
  password: string;
}

const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Buttons = styled.View`
  width: 80%;
`;

const StackLogin = ({ route }: LoginNavigationProps) => {
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);
  const { control, handleSubmit, getValues } = useForm<LoginFormData>({
    defaultValues: { username: route.params?.username || "", password: route.params?.password || "" },
  });
  const [loginMutation, { loading }] = useLoginMutation({
    onCompleted: async (data: LoginMutation) => {
      if (data.login.ok === false) {
        return;
      }
      if (data.login.token) {
        await handleLogin(data.login.token);
      }
    },
  });

  const onValid = () => {
    if (loading === true) {
      return;
    }
    const { username, password } = getValues();
    loginMutation({ variables: { username, password } });
  };

  return (
    <KeyboardAvoidingLayout>
      <Container>
        <Logo />
        <AuthTextInput name="username" control={control} onSubmitEditing={() => onFocusNext(passwordRef)} secureTextEntry={false} placeholderText="유저 이름" />
        <AuthTextInput name="password" control={control} innerRef={passwordRef} onSubmitEditing={handleSubmit(onValid)} secureTextEntry={true} placeholderText="비밀번호" />
        <Buttons>
          <Button loading={loading} onPress={handleSubmit(onValid)} text="로그인" />
        </Buttons>
      </Container>
    </KeyboardAvoidingLayout>
  );
};

export default StackLogin;
