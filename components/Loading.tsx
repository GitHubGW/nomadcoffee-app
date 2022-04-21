import { ActivityIndicator } from "react-native";

interface LoadingProps {
  color: string;
}

const Loading = ({ color }: LoadingProps) => {
  return <ActivityIndicator size="small" color={color} />;
};

export default Loading;
