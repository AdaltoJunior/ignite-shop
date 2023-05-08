import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  "::-webkit-scrollbar": {
    width: 16,
    backgroundColor: "$gray800",
  },

  "::-webkit-scrollbar-thumb": {
    background: "$gray700",
    backgroundClip: "padding-box",
    border: "4px solid transparent",
    borderRadius: 8,
    boxShadow: "none",
    minHeight: 50,
  },

  "::-webkit-scrollbar-track": {
    background: "none",
    border: "none",
  },

  body: {
    color: "$gray100",
    backgroundColor: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  button: {
    cursor: "pointer",
  },
});
