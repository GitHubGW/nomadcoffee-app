import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList } from "../types/stack.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type UploadPhotoNavigationProps = NativeStackScreenProps<RootStackParamList, "TabUploadPhoto">;

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding-top: 50px;
`;

const Photo = styled.Image`
  height: 500px;
`;

const CaptionContainer = styled.View`
  margin-top: 30px;
`;

const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 100px;
`;

const TabUploadPhoto = ({ route }: UploadPhotoNavigationProps) => {
  return (
    <Container>
      <StatusBar hidden={false} style="light" />
      {route?.params?.file ? <Photo resizeMode="cover" source={{ uri: route?.params?.file }} /> : null}
      <CaptionContainer>
        <Caption returnKeyType="done" placeholder="Write a caption..." placeholderTextColor="rgba(0, 0, 0, 0.5)" />
      </CaptionContainer>
    </Container>
  );
};

export default TabUploadPhoto;
