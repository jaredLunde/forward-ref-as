import * as React from 'react'
/**
 * A wrapper around `React.forwardRef` that allows HTML attributes and prop types to
 * be derived from the `as` prop.
 * @param render A React ref forwarding component
 *
 * @example
 * forwardRefAs<ButtonProps, 'button'>(ButtonComponent)
 */
declare function forwardRefAs<Props, DefaultAs extends AsProp = 'div'>(
  render: React.ForwardRefRenderFunction<
    DefaultAs extends keyof JSX.IntrinsicElements
      ? FromReactType<DefaultAs>
      : DefaultAs,
    Props
  >
): ForwardRefAsExoticComponent<
  Props,
  DefaultAs,
  Partial<Props> &
    Partial<React.PropsWithoutRef<React.ComponentProps<DefaultAs>>>
>
export default forwardRefAs
/**
 * This is a signature that matches `ForwardRefExoticComponent`.
 */
export declare type ForwardRefAsExoticComponent<
  Props,
  DefaultAs extends AsProp,
  PartialProps = Partial<Props> &
    Partial<React.ComponentPropsWithoutRef<DefaultAs>>
> = {
  <As extends AsProp = DefaultAs>(
    props: Prefer<
      {
        as?: As
      } & Props,
      PropsOf<As>
    > &
      React.RefAttributes<PropsOf<As>>
  ): JSX.Element | null
  defaultProps?: PartialProps
  displayName?: string
  propTypes?: React.WeakValidationMap<PartialProps>
  readonly $$typeof: symbol
}
/**
 * Omits an props in `T` that are already present in `P`
 */
export declare type Prefer<P, T> = P & Omit<T, keyof P>
/**
 * Extracts the props of a component type
 * Credit: Emotion
 */
declare type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>
/**
 * These are the types accepted by the "as" prop in layout components
 */
export declare type AsProp =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>
/**
 * Maps a keyof JSX.IntrinsicElement (e.g. 'div' or 'svg') or a
 * React.ComponentType to it's type.
 *
 * For example:
 *   FromReactType<"div"> ==> HTMLDivElement
 *   FromReactType<"svg"> ==> SVGSVGElement
 *   FromReactType<React.FC<P>. ==> React.FC<P>
 */
export declare type FromReactType<
  T extends React.ElementType
> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends React.DetailedHTMLFactory<
      React.HTMLAttributes<infer U>,
      infer U
    >
    ? U
    : JSX.IntrinsicElements[T] extends React.SVGProps<infer V>
    ? V
    : never
  : T
