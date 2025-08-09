import type { RecipeVariantProps } from "../../styled-system/types";
import type { buttonStyles } from "../ui/Button/Button.styles";

export type IButtonProps = RecipeVariantProps<typeof buttonStyles>;

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'icon';
export type ButtonVisual = 'solid' | 'outline';