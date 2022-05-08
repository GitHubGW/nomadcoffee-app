import { Camera } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert, Image, Text, View } from "react-native";
import { CameraType } from "expo-camera/build/Camera.types";
import Slider from "@react-native-community/slider";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList } from "../types/stack.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as MediaLibrary from "expo-media-library";

type TakePhotoNavigationProps = NativeStackScreenProps<RootStackParamList, "TabTakePhoto">;

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Top = styled.View`
  flex: 4;
`;

const Bottom = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabTakePhoto = ({ navigation }: TakePhotoNavigationProps) => {
  const cameraRef = useRef(new Camera({}));
  const [cameraReady, setCameraReady] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [zoom, setZoom] = useState(0);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [takenPhoto, setTakenPhoto] = useState("");

  const getMediaLibraryPermission = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status !== "granted") {
      await Camera.requestCameraPermissionsAsync();
    }
  };

  const onPressClose = () => {
    navigation.navigate("TabSelectPhoto");
  };

  const onPressType = () => {
    if (type === CameraType.back) {
      setType(CameraType.front);
    } else if (type === CameraType.front) {
      setType(CameraType.back);
    }
  };

  const onPressZoom = (value: number) => {
    setZoom(value);
  };

  const onPressFlash = () => {
    console.log("Camera.Constants.FlashMode", flashMode);
    if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on);
    } else if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.off);
    }
  };

  const onPressCamera = async () => {
    if (cameraRef.current && cameraReady === true) {
      const { uri } = await cameraRef.current.takePictureAsync({ quality: 1, exif: true, skipProcessing: true });
      const asset = await MediaLibrary.createAssetAsync(uri);
      setTakenPhoto(asset.uri);
    }
  };

  const onCameraReady = () => {
    setCameraReady(true);
  };

  const onPressCancel = () => {
    setTakenPhoto("");
  };

  const onPressUpload = () => {
    Alert.alert("사진", "사진을 업로드하시겠습니까?", [
      { text: "사진으로 돌아가기", onPress: () => onPressCancel(), style: "cancel" },
      { text: "업로드", onPress: () => navigation.navigate("TabUploadPhoto", { file: takenPhoto }) },
    ]);
  };

  useEffect(() => {
    getMediaLibraryPermission();
  }, []);

  return (
    <Container>
      <StatusBar hidden={true} />
      <Top>
        {takenPhoto === "" ? (
          <Camera ref={cameraRef} onCameraReady={onCameraReady} style={{ flex: 1 }} flashMode={flashMode} zoom={zoom} type={type}>
            <TouchableOpacity onPress={onPressClose}>
              <Ionicons name="close" style={{ color: "white", marginTop: 10, marginLeft: 10 }} size={40} />
            </TouchableOpacity>
          </Camera>
        ) : (
          <Image source={{ uri: takenPhoto }} style={{ width: "100%", flex: 1 }} />
        )}
      </Top>
      <Bottom>
        {takenPhoto === "" ? (
          <>
            <Slider onValueChange={onPressZoom} style={{ width: 200, height: 40 }} minimumValue={0} maximumValue={1} minimumTrackTintColor="white" maximumTrackTintColor="gray" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={onPressType}>
                <Ionicons name="camera-reverse" style={{ color: "white" }} size={50} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressCamera} style={{ marginLeft: 50, marginRight: 50 }}>
                <Ionicons name="camera" style={{ color: "white" }} size={80} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressFlash}>
                {flashMode === Camera.Constants.FlashMode.off ? (
                  <Ionicons name="flash" style={{ color: "white" }} size={50} />
                ) : (
                  <Ionicons name="flash-off" style={{ color: "white" }} size={50} />
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={onPressCancel}>
              <Text style={{ backgroundColor: "crimson", padding: 13, color: "white" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressUpload}>
              <Text style={{ backgroundColor: "dodgerblue", padding: 13, color: "white" }}>Upload photo</Text>
            </TouchableOpacity>
          </View>
        )}
      </Bottom>
    </Container>
  );
};

export default TabTakePhoto;
