import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { RootStackParamList } from "../types/stack.types";
import { FlatList, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useSearchCoffeeShopsLazyQuery } from "../generated/graphql";
import CoffeeShopItem from "../components/CoffeeShopItem";

type SearchNavigationProps = NativeStackScreenProps<RootStackParamList, "TabSearch">;

interface SearchFormData {
  keyword: string;
}

const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const STextInput = styled.TextInput`
  border: 2px solid gray;
  border-radius: 5px;
  background-color: white;
  width: 300px;
  padding: 10px;
  color: black;
`;

const SText = styled.Text`
  color: white;
  margin-top: 100px;
`;

const TabSearch = ({ navigation }: SearchNavigationProps) => {
  const { control, getValues } = useForm<SearchFormData>({ defaultValues: { keyword: "" } });
  const [searchCoffeeShopsLazyQuery, { data, loading, called }] = useSearchCoffeeShopsLazyQuery();

  const onSubmitEditing = () => {
    if (loading === true) {
      return;
    }
    const { keyword } = getValues();
    if (keyword === "") {
      return;
    }
    searchCoffeeShopsLazyQuery({ variables: { keyword } });
  };

  const renderItem = ({ item: coffeeShop }: any) => {
    return (
      <View style={{ marginTop: 50 }}>
        <CoffeeShopItem {...coffeeShop} />
      </View>
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Controller
          name="keyword"
          control={control}
          rules={{ required: true, maxLength: 20 }}
          render={({ field: { onChange, value } }) => (
            <STextInput
              value={value}
              onChangeText={onChange}
              onSubmitEditing={onSubmitEditing}
              placeholderTextColor="gray"
              placeholder="??????"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="search"
              returnKeyLabel="Search"
              keyboardType="default"
            />
          )}
        ></Controller>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      {called === true && loading === true ? <SText>????????? ?????????...</SText> : null}
      {called === true && loading === false && (data?.searchCoffeeShops?.length as number) > 0 ? (
        <FlatList
          data={data?.searchCoffeeShops}
          renderItem={renderItem}
          keyExtractor={(coffeeShop, index) => {
            return String(coffeeShop) + String(index);
          }}
        />
      ) : null}
      {called === true && loading === false && data?.searchCoffeeShops?.length === 0 ? <SText>??????????????? ???????????? ????????????.</SText> : null}
      {called === false ? <SText>???????????? ???????????? ??????????????????.</SText> : null}
    </Container>
  );
};

export default TabSearch;
