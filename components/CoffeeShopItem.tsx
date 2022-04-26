import { Image, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

interface CoffeeShopItemProps {
  id: number;
  name: string;
  latitude?: number | null;
  longitude?: number | null;
  coffeeShopPhotos?: any[];
  user: { __typename: string; id: number; username: string; avatarUrl: string | null };
  categories: { __typename: string; id: number; name: string; slug: string | null }[];
}

const Container = styled.View`
  margin-top: 50px;
`;

const PhotoContainer = styled.View``;

const UserContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const Username = styled.Text`
  color: white;
`;

const Name = styled.Text`
  color: dodgerblue;
  font-size: 18px;
  font-weight: bold;
`;

const CategoryName = styled.Text`
  color: white;
  font-size: 18px;
`;

const CoffeeShopItem = ({ id, name, latitude, longitude, coffeeShopPhotos, user, categories }: CoffeeShopItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <PhotoContainer>
        <UserContainer>
          {user.avatarUrl ? (
            <Image source={{ uri: user.avatarUrl }} style={{ width: 40, height: 40 }} />
          ) : (
            <Image source={require("../assets/user.png")} style={{ width: 40, height: 40 }} />
          )}
          <Username>{user.username}</Username>
        </UserContainer>
        {coffeeShopPhotos && coffeeShopPhotos.length === 0 ? (
          <Image resizeMode="contain" source={require("../assets/coffeeshop.jpeg")} style={{ width: width, height: width / 1.2 }} />
        ) : (
          <Image source={{ uri: coffeeShopPhotos && coffeeShopPhotos[0]?.url ? coffeeShopPhotos[0].url : "" }} style={{ width: width, height: width / 1.2 }} />
        )}
        <CategoryContainer>
          <Name>{name}</Name>
          {categories.map((category) => (
            <CategoryName> ({category.name})</CategoryName>
          ))}
        </CategoryContainer>
      </PhotoContainer>
    </Container>
  );
};

export default CoffeeShopItem;
