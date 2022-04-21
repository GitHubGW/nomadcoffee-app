import { Keyboard, Platform } from "react-native";
import styled from "styled-components/native";

interface KeyboardAvoidingLayoutProps {
  children: React.ReactNode;
}

const TouchableWithoutFeedbackContainer = styled.TouchableWithoutFeedback`
  flex: 1;
`;

const KeyboardAvoidingViewContainer = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const KeyboardAvoidingLayout = ({ children }: KeyboardAvoidingLayoutProps) => {
  return (
    <TouchableWithoutFeedbackContainer onPress={Keyboard.dismiss} disabled={Platform.OS === "web"}>
      <KeyboardAvoidingViewContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>{children}</KeyboardAvoidingViewContainer>
    </TouchableWithoutFeedbackContainer>
  );
};

export default KeyboardAvoidingLayout;
