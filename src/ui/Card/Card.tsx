import { PixelTop } from "../../component/PixelsTop";
import { PixelBottom } from "../../component/PixelsBottom";
import {
  cardContainer,
  cardContent,
  cardImgContainer,
  cardPixelsBottomContainer,
  cardPixelsTopContainer,
  imgBackground,
  pixelSvgStyle
} from "./Card.styles"
import type { ICardProps } from "../../interface/card.interface";




export function Card({
  background,
  children,
  isImageBackground,
  positionImageBackground,
  imageBackground,
  isPixelsImages,
  sidePixelsImages,
  heightAuto,
  className,
  ...rest
}: ICardProps) {
  return (
    <div className={`${cardContainer({ background, heightAuto })} ${className || ''}`} {...rest}>
      <div className={cardContent()}>
        {children}
      </div>
      
      {isImageBackground && positionImageBackground && (
        <span className={cardImgContainer({ positionImageBackground })}>
          <img
            className={imgBackground()}
            src={imageBackground}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </span>
      )}
      
      {isPixelsImages && sidePixelsImages && (
        <>
          <span className={cardPixelsTopContainer({ sidePixelsImages })}>
            <div style={pixelSvgStyle}>
              <PixelTop background={background} />
            </div>
          </span>
          <span className={cardPixelsBottomContainer({ sidePixelsImages })}>
            <div style={pixelSvgStyle}>
              <PixelBottom background={background} />
            </div>
          </span>
        </>
      )}
    </div>
  )
}