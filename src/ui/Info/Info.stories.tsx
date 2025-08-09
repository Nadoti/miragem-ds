import type { Meta, StoryObj } from "@storybook/react-vite";
import Info from "./Info";

const meta: Meta<typeof Info> = {
  title: "UI/Info",
  component: Info,
};

export const Informative: StoryObj<typeof Info> = {
  args: {
    children: "Hello from Storybook",
    variant: "info",
  },
};

export const Warning: StoryObj<typeof Info> = {
  args: {
    children: "Hello from Storybook",
    variant: "warning",
  },
};

export const Error: StoryObj<typeof Info> = {
  args: {
    children: "Hello from Storybook",
    variant: "error",
  },
};

export default meta;