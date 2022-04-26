import styled from "styled-components/native";
import Loading from "./Loading";

interface ScreenLayoutProps {
  loading: boolean;
  children: React.ReactNode;
}

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const ScreenLayout = ({ loading, children }: ScreenLayoutProps) => {
  return <Container>{loading === true ? <Loading color="white" /> : children}</Container>;
};

export default ScreenLayout;
