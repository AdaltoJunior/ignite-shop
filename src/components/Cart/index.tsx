import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import { Handbag, X } from "@phosphor-icons/react";

import { Button } from "@/components/Button";
import { useCart } from "@/hooks/useCart";

import {
  CartButton,
  CartClose,
  CartContent,
  InfoContainer,
  CartProducts,
  CartTitle,
  Product,
  ProductContent,
  ProductImage,
  Info,
  InfoText,
} from "./styles";

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { cartProducts, removeFromCart } = useCart();

  const cartTotalUnitAmount = cartProducts.reduce((acc, product) => {
    return acc + product.unitAmount;
  }, 0);

  const cartTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotalUnitAmount / 100);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartProducts,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Root>
      <CartButton full={cartProducts.length > 0}>
        <span>{cartProducts.length}</span>
        <Handbag size={24} weight="bold" />
      </CartButton>

      <Dialog.Portal>
        <Dialog.Overlay />
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <CartTitle>Sacola de compras</CartTitle>

          <CartProducts>
            {cartProducts.map((product) => (
              <Product key={product.id}>
                <ProductImage>
                  <Image
                    width={100}
                    height={100}
                    src={product.imageUrl}
                    alt=""
                  />
                </ProductImage>
                <ProductContent>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                  <button onClick={() => removeFromCart(product.id)}>
                    Remover
                  </button>
                </ProductContent>
              </Product>
            ))}
          </CartProducts>

          <InfoContainer>
            <Info>
              <InfoText>Quantidade</InfoText>
              <InfoText size="md">
                {cartProducts.length}{" "}
                {cartProducts.length === 1 ? "item" : "itens"}
              </InfoText>
            </Info>
            <Info>
              <InfoText size="md" weight="bold">
                Valor total
              </InfoText>
              <InfoText size="xl" weight="bold">
                {cartTotalPrice}
              </InfoText>
            </Info>
          </InfoContainer>

          <Button 
            onClick={handleBuyProduct} 
            disabled={cartProducts.length <= 0 || isCreatingCheckoutSession}
          >
            Finalizar compra
          </Button>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
