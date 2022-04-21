import styled from "styled-components/native";

const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

const Logo = () => {
  return <LogoImage resizeMode="contain" source={require("../assets/coffee.png")} />;
};

export default Logo;
