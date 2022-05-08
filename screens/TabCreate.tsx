import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { RootStackParamList } from "../types/stack.types";
import { Text } from "react-native";
import { useForm } from "react-hook-form";
import AuthTextInput from "../components/AuthTextInput";
import Button from "../components/Button";
import { useCreateCoffeeShopMutation } from "../generated/graphql";
import { useEffect } from "react";
import KeyboardAvoidingLayout from "../components/KeyboardAvoidingLayout";

type CreateNavigationProps = NativeStackScreenProps<RootStackParamList, "TabCreate">;

interface CreateCoffeeShopFormData {
  name: string;
  category: string;
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

const TabCreate = ({ navigation }: CreateNavigationProps) => {
  const { control, handleSubmit, getValues, reset } = useForm<CreateCoffeeShopFormData>({
    defaultValues: { name: "", category: "" },
  });
  const [createCoffeeShopMutation, { loading }] = useCreateCoffeeShopMutation({
    onCompleted: () => {
      reset();
      navigation.navigate("Home");
    },
  });

  const onValid = () => {
    const { name, category } = getValues();
    if (name && category) {
      createCoffeeShopMutation({ variables: { name, category } });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={{ color: "white" }}>커피숍 생성</Text>,
    });
  }, []);

  return (
    <KeyboardAvoidingLayout>
      <Container>
        <AuthTextInput name="name" control={control} secureTextEntry={false} placeholderText="커피숍 이름" />
        <AuthTextInput name="category" control={control} onSubmitEditing={handleSubmit(onValid)} secureTextEntry={false} placeholderText="카테고리" />
        <Buttons>
          <Button loading={loading} onPress={handleSubmit(onValid)} text="커피숍 생성" />
        </Buttons>
      </Container>
    </KeyboardAvoidingLayout>
  );
};

export default TabCreate;
