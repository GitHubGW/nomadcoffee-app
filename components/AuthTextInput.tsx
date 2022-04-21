import { Controller } from "react-hook-form";
import styled from "styled-components/native";

interface AuthTextInputProps {
  name: string;
  control: any;
  innerRef?: any;
  onSubmitEditing?: () => any;
  secureTextEntry: boolean;
  placeholderText: string;
}

const Input = styled.TextInput`
  background-color: white;
  width: 80%;
  color: black;
  padding: 8px 15px;
  border-radius: 50px;
  margin-bottom: 5px;
`;

const AuthTextInput = ({ name, control, innerRef, onSubmitEditing, secureTextEntry, placeholderText }: AuthTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          onChangeText={onChange}
          ref={innerRef}
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          placeholder={placeholderText}
          placeholderTextColor="gray"
        />
      )}
    ></Controller>
  );
};

export default AuthTextInput;
