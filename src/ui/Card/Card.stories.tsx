import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card as CardComponent } from "./Card";
import type { ICardProps } from "../../interface/card.interface";
import img from "../../assets/img-woman-credit-card-md@2x.png"

const meta: Meta<typeof CardComponent> = {
  title: "Card",
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Background color of the card'
    },
    isImageBackground: {
      control: { type: 'boolean' },
      description: 'Show or hide background image'
    },
    positionImageBackground: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Position of the background image'
    },
    imageBackground: {
      control: { type: 'text' },
      description: 'Custom image URL (optional)'
    }
  },
  args: {
    isImageBackground: true,
    positionImageBackground: 'bottom-left',
    background: 'primary'
  }
}

type Story = StoryObj<ICardProps>;

export const Card: Story = {
  render: (args) => {
    return (
      <CardComponent {...args} isImageBackground={true} imageBackground={img} heightAuto={false} background="primary" isPixelsImages={true} sidePixelsImages="left">
        <div style={{ padding: '20px', zIndex: 2, position: 'relative' }}>
          <h2 style={{ color: 'white', marginBottom: '10px' }}>Card Title</h2>
          <p style={{ color: 'white' }}>
            Este é o conteúdo do card. A imagem pode ser posicionada em qualquer 
            um dos 4 cantos do card usando o controle abaixo.
          </p>
        </div>
      </CardComponent>
    );
  },
};


export default meta;