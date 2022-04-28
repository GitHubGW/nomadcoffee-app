import { useState } from "react";
import { FlatList } from "react-native";
import CoffeeShopItem from "../components/CoffeeShopItem";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeCoffeeShopsQuery } from "../generated/graphql";
import { onRefresh } from "../shared/shared.utils";

const TabHome = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { data, loading, refetch, fetchMore } = useSeeCoffeeShopsQuery({ variables: { offset: 0 } });

  const onEndReached = async () => {
    await fetchMore({ variables: { offset: data?.seeCoffeeShops?.length } });
  };

  const renderItem = ({ item: coffeeShop }: any) => {
    return <CoffeeShopItem key={coffeeShop.id} {...coffeeShop} />;
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        refreshing={refreshing}
        onRefresh={() => onRefresh(setRefreshing, refetch)}
        showsVerticalScrollIndicator={false}
        data={data?.seeCoffeeShops}
        renderItem={renderItem}
        keyExtractor={(coffeeShop, index) => {
          return String(coffeeShop?.id);
        }}
      />
    </ScreenLayout>
  );
};

export default TabHome;
