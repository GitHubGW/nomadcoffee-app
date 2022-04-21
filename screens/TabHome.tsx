import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TabHome = () => {
  return (
    <Container>
      <Text style={{ color: "white" }}>TabHome</Text>
    </Container>
  );
};

export default TabHome;
