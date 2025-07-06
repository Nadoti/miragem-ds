import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ComponentProps } from 'react';
import * as Util from './util';
import * as Native from './css';
import * as Config from './config';
import * as ThemeUtil from './theme';

type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

/** Returns a new Styled Component. */
interface StyledComponent<
	Type = 'span',
	Props = {},
	Media = {},
	CSS = {}
> extends React.ForwardRefExoticComponent<
	Util.Assign<
		Type extends IntrinsicElementsKeys | React.ComponentType<any> 
			? React.ComponentPropsWithRef<Type>
		: never,
		TransformProps<Props, Media> & { css?: CSS }
	>
> {
	(
		props: Util.Assign<
			Type extends IntrinsicElementsKeys | React.ComponentType<any>
				? React.ComponentPropsWithRef<Type>
			: {},
			TransformProps<Props, Media> & {
				as?: never,
				css?: CSS
			}
		>
	): React.ReactElement | null

	<
		C extends CSS,
		As extends string | React.ComponentType<any> = Type extends string | React.ComponentType<any> ? Type : any,
		InnerProps = Type extends StyledComponent<any, infer IP, any, any> ? IP : {},
	>(
		props: Util.Assign<
			React.ComponentPropsWithRef<As extends IntrinsicElementsKeys | React.ComponentType<any> ? As : never>,
			TransformProps<Util.Assign<InnerProps, Props>, Media> & { 
				as?: As,
				css?: {
					[K in keyof C]: K extends keyof CSS ? CSS[K] : never
				}
			}
		>
	): React.ReactElement | null

	className: string
	selector: string

	[$$StyledComponentType]: Type
	[$$StyledComponentProps]: Props
	[$$StyledComponentMedia]: Media
}

type TransformProps<Props, Media> = {
	[K in keyof Props]: (
		| Props[K]
		| (
			& {
				[KMedia in Util.Prefixed<'@', 'initial' | keyof Media>]?: Props[K]
			}
			& {
				[KMedia in string]: Props[K]
			}
		)
	)
}

/** Unique symbol used to reference the type of a Styled Component. */
declare const $$StyledComponentType: unique symbol

/** Unique symbol used to reference the type of a Styled Component. */
type $$StyledComponentType = typeof $$StyledComponentType

/** Unique symbol used to reference the props of a Styled Component. */
declare const $$StyledComponentProps: unique symbol

/** Unique symbol used to reference the props of a Styled Component. */
type $$StyledComponentProps = typeof $$StyledComponentProps

/** Unique symbol used to reference the media passed into a Styled Component. */
declare const $$StyledComponentMedia: unique symbol

/** Unique symbol used to reference the media passed into a Styled Component. */
type $$StyledComponentMedia = typeof $$StyledComponentMedia

/** CSS style declaration object. */
interface CSSProperties extends Native.StandardLonghandProperties, Native.StandardShorthandProperties, Native.SvgProperties {}

type ValueByPropertyName<PropertyName> = PropertyName extends keyof CSSProperties ? CSSProperties[PropertyName] : never

type TokenByPropertyName<PropertyName, Theme, ThemeMap> = PropertyName extends keyof ThemeMap ? TokenByScaleName<ThemeMap[PropertyName], Theme> : never

type TokenByScaleName<ScaleName, Theme> = ScaleName extends keyof Theme ? Util.Prefixed<'$', keyof Theme[ScaleName]> : never

/** Returns a Style interface, leveraging the given media and style map. */
type CSS<
	Media = {},
	Theme = {},
	ThemeMap = Config.DefaultThemeMap,
	Utils = {},
> = (
	// nested at-rule css styles
	& {
		[K in Util.Prefixed<'@', keyof Media>]?: CSS<Media, Theme, ThemeMap, Utils>
	}
	// known property styles
	& {
		[K in keyof CSSProperties]?: (
			| ValueByPropertyName<K>
			| TokenByPropertyName<K, Theme, ThemeMap>
			| Native.Globals
			| ThemeUtil.ScaleValue
			| Util.Index
			| undefined
		)
	}
	// known utility styles
	& {
		[K in keyof Utils as K extends keyof CSSProperties ? never : K]?: Utils[K] extends (arg: infer P) => any
			? (
				| (
					P extends any[]
						? (
							| (
								$$PropertyValue extends keyof P[0]
									? (
										| ValueByPropertyName<P[0][$$PropertyValue]>
										| TokenByPropertyName<P[0][$$PropertyValue], Theme, ThemeMap>
										| Native.Globals
										| ThemeUtil.ScaleValue
										| undefined
									)
								: $$ScaleValue extends keyof P[0]
									? (
										| TokenByScaleName<P[0][$$ScaleValue], Theme>
										| { scale: P[0][$$ScaleValue] }
										| undefined
									)
								: never
							)[]
							| P
						)
					: $$PropertyValue extends keyof P
						? (
							| ValueByPropertyName<P[$$PropertyValue]>
							| TokenByPropertyName<P[$$PropertyValue], Theme, ThemeMap>
							| Native.Globals
							| undefined
						)
					: $$ScaleValue extends keyof P
						? (
							| TokenByScaleName<P[$$ScaleValue], Theme>
							| { scale: P[$$ScaleValue] }
							| undefined
						)
					: never
				)
				| P
			)
		: never
	}
	// known theme styles
	& {
		[K in keyof ThemeMap as K extends keyof CSSProperties ? never : K extends keyof Utils ? never : K]?: (
				| Native.Globals
				| Util.Index
				| undefined
			)
	}
	// unknown css declaration styles
	& {
		/** Unknown property. */
		[K: string]: (
			| number
			| string
			| CSS<Media, Theme, ThemeMap, Utils>
			| {}
			| undefined
		)
	}
)

/** Unique symbol used to reference a property value. */
declare const $$PropertyValue: unique symbol

/** Unique symbol used to reference a property value. */
type $$PropertyValue = typeof $$PropertyValue

/** Unique symbol used to reference a token value. */
declare const $$ScaleValue: unique symbol

/** Unique symbol used to reference a token value. */
type $$ScaleValue = typeof $$ScaleValue

declare const Select: StyledComponent<"select", {}, {}, CSS<{}, {}, {}, {}>>;
declare function Select1(): react_jsx_runtime.JSX.Element;
type SelectProps = ComponentProps<typeof Select>;

declare const Input: StyledComponent<"input", {}, {}, CSS<{}, {
    colors: {
        black: string;
        white: string;
        gray100: string;
        gray700: string;
        green100: string;
        green500: string;
        blue600: string;
        red500: string;
    };
    fontSizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    fontWeights: {
        regular: string;
        semiBold: string;
        bold: string;
    };
    fonts: {
        default: string;
    };
    lineHeights: {
        base: string;
    };
    radii: {
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
    space: {
        2: string;
        4: string;
        6: string;
    };
}, {
    height: "space";
    width: "space";
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {}>>;
type InputProps = ComponentProps<typeof Input>;

export { Input, type InputProps, Select1, type SelectProps };
