import { css } from "../../../styled-system/css";

export const containerStyles = css({
  width: "100%",
  position: "relative",
  border: "1px solid token(colors.green500)",
  borderRadius: "md",
  background: "white",
});

export const selectTitleContainerStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "4",
  borderRadius: "md",
  cursor: "pointer",
});

export const selectTitleOpenStyles = css({
  borderBottom: "1px solid token(colors.green500)",
});

export const selectTitleClosedStyles = css({
  borderBottom: "none",
});

export const labelStyles = css({
  pointerEvents: "none",
});

export const selectContentStyles = css({
  // estilos base se necessário
});

export const selectContentOpenStyles = css({
  display: "block"
});

export const selectContentClosedStyles = css({
  display: "none"
});

export const listOptionsStyles = css({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  paddingY: "4",
  paddingX: "0",
  // background: "red",
});

export const optionsStyles = css({
  listStyle: "none",
  paddingY: "4",
  paddingX: "2",
  cursor: "pointer",

  "&:hover": {
    color: "gray800",
    background: "green200",
    fontWeight: "bold"
  },
});