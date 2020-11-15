/**
 * All credit goes to Chance (Reach UI), and Haz (Reakit) for creating
 * the base type definitions upon which Chakra UI improved on
 */
import * as React from 'react'
declare function forwardRef<P, T extends AsProp = 'div'>(
  component: (
    props: React.PropsWithChildren<P> &
      Omit<PropsOf<T>, keyof P | 'ref'> & {
        as?: AsProp
      },
    ref: React.Ref<any>
  ) => React.ReactElement | null
): ComponentWithAs<T, P>
export declare type AsProp = React.ElementType
export declare type PropsOf<T extends AsProp> = React.ComponentProps<T>
export interface ComponentWithAs<T extends AsProp, P> {
  <TT extends AsProp>(
    props: {
      as?: TT
    } & P &
      Omit<PropsOf<TT>, keyof PropsOf<T>> &
      Omit<PropsOf<T>, keyof P>
  ): JSX.Element
  displayName?: string
  propTypes?: React.WeakValidationMap<React.PropsWithChildren<P> & PropsOf<T>>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: React.PropsWithChildren<P> &
    PropsOf<T> & {
      as?: AsProp
    }
  id?: string
}
export default forwardRef
