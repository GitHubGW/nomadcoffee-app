import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RefObject, useRef } from "react";
import styled from "styled-components/native";
import AuthTextInput from "../components/AuthTextInput";
import Button from "../components/Button";
import KeyboardAvoidingLayout from "../components/KeyboardAvoidingLayout";
import Logo from "../components/Logo";
import { onFocusNext } from "../shared/shared.utils";
import { RootStackParamList } from "../types/stack.types";
import { useForm } from "react-hook-form";
import { CreateAccountMutation, useCreateAccountMutation } from "../generated/graphql";

type CreateAccountNavigationProps = NativeStackScreenProps<RootStackParamList, "StackCreateAccount">;

interface CreateAccountFormData {
  email: string;
  name: string;
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

const StackCreateAccount = ({ navigation }: CreateAccountNavigationProps) => {
  const nameRef: RefObject<HTMLInputElement> = useRef(null);
  const usernameRef: RefObject<HTMLInputElement> = useRef(null);
  const passwordRef: RefObject<HTMLInputElement> = useRef(null);
  const { control, handleSubmit, getValues } = useForm<CreateAccountFormData>({ defaultValues: { email: "", name: "", username: "", password: "" } });
  const [createAccountMutation, { loading }] = useCreateAccountMutation({
    onCompleted: (data: CreateAccountMutation) => {
      if (data.createAccount.ok === false) {
        return;
      }
      const { username, password } = getValues();
      navigation.navigate("StackLogin", { username, password });
    },
  });

  const onValid = () => {
    if (loading === true) {
      return;
    }
    const { email, name, username, password } = getValues();
    createAccountMutation({ variables: { email, name, username, password } });
  };

  return (
    <KeyboardAvoidingLayout>
      <Container>
        <Logo />
        <AuthTextInput name="email" control={control} onSubmitEditing={() => onFocusNext(nameRef)} secureTextEntry={false} placeholderText="이메일" />
        <AuthTextInput name="name" control={control} innerRef={nameRef} onSubmitEditing={() => onFocusNext(usernameRef)} secureTextEntry={false} placeholderText="이름" />
        <AuthTextInput
          name="username"
          control={control}
          innerRef={usernameRef}
          onSubmitEditing={() => onFocusNext(passwordRef)}
          secureTextEntry={false}
          placeholderText="유저 이름"
        />
        <AuthTextInput name="password" control={control} innerRef={passwordRef} onSubmitEditing={handleSubmit(onValid)} secureTextEntry={true} placeholderText="비밀번호" />
        <Buttons>
          <Button loading={loading} onPress={handleSubmit(onValid)} text="계정 생성" />
        </Buttons>
      </Container>
    </KeyboardAvoidingLayout>
  );
};

export default StackCreateAccount;
