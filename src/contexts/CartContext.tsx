import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  unitAmount: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartProducts: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: string) => void;
  checkProductAlredyInCart: (id: string) => boolean;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    const isAlredyInCart = checkProductAlredyInCart(product.id);

    if (isAlredyInCart) return;

    setCartProducts((state) => [...state, product]);
  }

  function removeFromCart(id: string) {
    const updatedProducts = cartProducts.filter(
      (cartProduct) => cartProduct.id !== id
    );

    setCartProducts(updatedProducts);
  }

  function checkProductAlredyInCart(id: string) {
    const productAlredyInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === id
    );

    return productAlredyInCart;
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        checkProductAlredyInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
