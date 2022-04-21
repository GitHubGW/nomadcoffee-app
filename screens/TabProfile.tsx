import { useReactiveVar } from "@apollo/client";
import styled from "styled-components/native";
import { handleLogout, isLoggedInVar } from "../apollo";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useSeeMeQuery } from "../generated/graphql";
import LoggedOutNavigation from "../navigators/LoggedOutNavigation";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const UserContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 50px;
  margin-bottom: 30px;
`;

const Email = styled.Text`
  color: white;
  font-size: 25px;
`;

const Name = styled.Text`
  color: white;
  font-size: 16px;
`;

const Username = styled.Text`
  color: white;
  font-size: 16px;
`;

const Buttons = styled.View`
  margin-top: 30px;
  width: 80%;
`;

const TabProfile = () => {
  const isLoggedIn: boolean = useReactiveVar(isLoggedInVar);
  const { data, loading } = useSeeMeQuery();

  return (
    <Container>
      {isLoggedIn === true ? (
        <>
          {loading === true ? (
            <Loading color="white" />
          ) : (
            <UserContainer>
              {data?.seeMe?.avatarUrl ? <Avatar source={{ uri: data?.seeMe?.avatarUrl }} /> : <Avatar source={require("../assets/coffee.png")} />}
              <Email>Email: {data?.seeMe?.email}</Email>
              <Name>Name: {data?.seeMe?.name}</Name>
              <Username>Username: {data?.seeMe?.username}</Username>
              <Buttons>
                <Button loading={false} onPress={handleLogout} text="로그아웃" />
              </Buttons>
            </UserContainer>
          )}
        </>
      ) : (
        <LoggedOutNavigation />
      )}
    </Container>
  );
};

export default TabProfile;
