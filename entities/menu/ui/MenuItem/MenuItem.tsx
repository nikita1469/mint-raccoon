import { DishIcon, MinusIcon, PlusIcon } from "@/shared/ui/icons";
import { PALLETE_COLORS } from "@/shared/const/PALLETE_COLORS";
import { LikeIcon } from "@/shared/ui/icons";
import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { BlurView, Text } from "@/shared/ui";
import { styles } from "./MenuItem.styles";

interface MenuItemProps {
  item: any;
  cartItems: { id: string; count: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<{ id: string; count: number }[]>
  >;
}

const MenuItem: FC<MenuItemProps> = ({ item, cartItems, setCartItems }) => {
  const [isLiked, setIsLiked] = useState(false);

  const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      }
      return [...prev, { id: item.id, count: 1 }];
    });
  };

  const handleRemoveFromCart = () => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        if (existingItem.count <= 1) {
          return prev.filter((cartItem) => cartItem.id !== item.id);
        }
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count - 1 }
            : cartItem
        );
      }
      return prev;
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <BlurView gap={10}>
      <View style={styles.dishContainer}>
        <DishIcon />
        <TouchableOpacity style={styles.likeButton}>
          <LikeIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.priceRow}>
          <Text size="large">{item.price} ₽</Text>
          {item.weight && <Text color="textTransparent">{item.weight}</Text>}
        </View>
        <Text color="textTransparent">{item.name}</Text>
      </View>

      <View style={styles.addToCartContainer}>
        {isInCart ? (
          <>
            <TouchableOpacity onPress={handleRemoveFromCart}>
              <MinusIcon />
            </TouchableOpacity>
            <Text color="grey">{isInCart.count}</Text>
            <TouchableOpacity onPress={handleAddToCart}>
              <PlusIcon />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center" }}
            disabled={!item.available}
            onPress={handleAddToCart}
          >
            <PlusIcon />
          </TouchableOpacity>
        )}
      </View>
    </BlurView>
  );
};

export default MenuItem;
