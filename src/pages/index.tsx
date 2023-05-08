import { MouseEvent } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";

import { useKeenSlider } from "keen-slider/react";
import { useCart } from "@/hooks/useCart";

import { stripe } from "@/lib/stripe";
import { HomeContainer, Product } from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/Button";
import { Handbag } from "@phosphor-icons/react";

import { IProduct } from "@/contexts/CartContext";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  const { addToCart, checkProductAlredyInCart } = useCart();

  function handleAddToCart(e: MouseEvent, product: IProduct) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              className="keen-slider__slide"
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <Button
                  onClick={(e) => handleAddToCart(e, product)}
                  disabled={checkProductAlredyInCart(product.id)}
                >
                  <Handbag size={32} weight="bold" />
                </Button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
      unitAmount: price.unit_amount,
      description: product.description,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
