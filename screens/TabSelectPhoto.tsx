import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { RootStackParamList } from "../types/stack.types";

type SelectPhotoNavigationProps = NativeStackScreenProps<RootStackParamList, "TabSelectPhoto">;

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
`;

const Bottom = styled.View`
  flex: 1;
`;

const TabSelectPhoto = ({ navigation }: SelectPhotoNavigationProps) => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [chosenPhoto, setChosenPhoto] = useState("");
  const { width } = useWindowDimensions();

  const getMediaLibraryPermission = async () => {
    const { accessPrivileges } = await MediaLibrary.getPermissionsAsync();

    if (accessPrivileges === "none") {
      await MediaLibrary.requestPermissionsAsync();
    }
    const { assets } = await MediaLibrary.getAssetsAsync();
    setPhotos(assets);
    setChosenPhoto(assets[0].uri);
  };

  const onPress = (photoUri: string) => {
    setChosenPhoto(photoUri);
  };

  const onPressNext = (chosenPhoto: string) => {
    navigation.navigate("TabUploadPhoto", { file: chosenPhoto });
  };

  const renderItem = ({ item: photo }: any) => {
    return (
      <TouchableOpacity onPress={() => onPress(photo.uri)}>
        <Image source={{ uri: photo.uri }} style={{ width: width / 3, height: width / 3 }} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getMediaLibraryPermission();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onPressNext(chosenPhoto)}>
          <Text style={{ color: "white", padding: 10 }}>Next</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Top>{chosenPhoto !== "" ? <Image source={{ uri: chosenPhoto }} style={{ width: "100%", height: "100%" }} /> : null}</Top>
      <Bottom>
        <FlatList numColumns={3} data={photos} renderItem={renderItem} keyExtractor={(photo) => String(photo.id)} />
      </Bottom>
    </Container>
  );
};

export default TabSelectPhoto;
