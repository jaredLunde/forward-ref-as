import * as React from 'react'
/**
 * A wrapper around `React.forwardRef` that allows HTML attributes and prop types to be derived from the `as` prop.
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
): ForwardRefAsExoticComponent<Props, DefaultAs>
export default forwardRefAs
/**
 * This is a signature that matches `ForwardRefExoticComponent`, but allows for
 * inheriting attributes via the "as" prop and gets rid of `propTypes` because,
 * dang it, this is TypeScript! Get that outta here.
 */
export declare type ForwardRefAsExoticComponent<
  Props,
  DefaultAs extends AsProp
> = Pick<
  React.ForwardRefExoticComponent<DefaultAs>,
  Exclude<keyof React.ForwardRefExoticComponent<DefaultAs>, 'defaultProps'>
> & {
  <As extends AsProp = DefaultAs>(
    props: Prefer<
      {
        as?: As
      } & Props,
      React.ComponentProps<As>
    > &
      React.RefAttributes<PropsOf<As>>
  ): JSX.Element | null
  defaultProps?: {
    as?: AsProp
  } & Partial<Props> &
    Partial<React.ComponentPropsWithoutRef<DefaultAs>>
  displayName?: string
  propTypes?: React.WeakValidationMap<
    {
      as?: AsProp
    } & Partial<Props> &
      Partial<React.ComponentPropsWithoutRef<DefaultAs>>
  >
}
/**
 * Omits an props in `T` that are already present in `P`
 */
export declare type Prefer<P, T> = P & Omit<T, keyof P>
/**
 * Extracts the props of a component type
 * Credit: Emotion
 */
export declare type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>
/**
 * These are the types accepted by the "as" prop in layout components
 */
export declare type AsProp = React.ReactType | keyof JSX.IntrinsicElements
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
  T extends React.ReactType
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
