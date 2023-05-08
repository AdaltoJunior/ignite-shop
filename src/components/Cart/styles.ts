import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartButton = styled(Dialog.Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem",
  backgroundColor: "$gray800",
  border: 0,
  borderRadius: 6,
  position: "relative",

  marginLeft: "auto",

  span: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    top: -7,
    right: -7,

    color: "$white",
    fontSize: "0.875rem",
    fontWeight: 700,

    width: "1.6875rem",
    height: "1.6875rem",
    backgroundColor: "$green500",
    border: "3px solid $gray900",
    borderRadius: "50rem",
    overflow: "hidden",

    opacity: 0,
  },

  svg: {
    color: "$gray700",
    flexShrink: 0,
  },

  variants: {
    full: {
      true: {
        span: {
          opacity: 1,
        },

        svg: {
          color: "$gray300",
        },
      },
    },
  },
});

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  maxWidth: "30rem",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  padding: "3rem",
  paddingTop: "1.5rem",
});

export const CartClose = styled(Dialog.Close, {
  marginLeft: "auto",
  lineHeight: 0,
  border: 0,
  background: "none",
  marginBottom: "1.5rem",

  svg: {
    color: "$gray700",
  },
});

export const CartTitle = styled(Dialog.Title, {
  fontSize: "$lg",
  fontWeight: 700,
  marginBottom: "2rem",
});

export const CartProducts = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginBottom: "1.5rem",
  overflow: "auto",
});

export const Product = styled("div", {
  display: "flex",
  gap: "1.25rem",
});

export const ProductImage = styled("div", {
  flexShrink: 0,
  width: "6.25rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductContent = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  strong: {
    fontSize: "$md",
    fontWeight: 400,
    color: "$gray300",
  },

  span: {
    fontSize: "$md",
    fontWeight: 700,
  },

  button: {
    marginTop: "auto",
    background: "none",
    border: 0,

    color: "$green500",
    fontSize: "1rem",
    lineHeight: 1.6,
    fontWeight: 700,

    alignSelf: "flex-start",
    transition: "color 0.15s",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  marginBottom: "3.5rem",
});

export const Info = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "0.5rem",
});

export const InfoText = styled("span", {
  fontSize: "1rem",

  variants: {
    size: {
      md: {
        fontSize: "$md",
      },
      xl: {
        fontSize: "$xl",
      },
    },
    weight: {
      bold: {
        fontWeight: "bold",
      },
    },
  },
});
