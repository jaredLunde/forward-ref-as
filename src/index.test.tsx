import * as React from 'react'
import {render} from '@testing-library/react'
import forwardRefAs from './index'
import type {AsProp} from './index'

describe('forwardRefAs()', () => {
  it('should forward ref', () => {
    const MyComponent = forwardRefAs<{as?: AsProp}>(
      ({as: As = 'div', ...props}, ref) => <As ref={ref} {...props} />
    )

    const refMock = {current: null}
    render(<MyComponent ref={refMock} />)

    expect(refMock.current).not.toBeNull()
  })

  it('should infer types', () => {
    const MyComponent = forwardRefAs<{as?: AsProp}>(
      ({as: As = 'div', ...props}, ref) => <As ref={ref} {...props} />
    )

    render(<MyComponent as='a' href='#foo' />)
    expect(true).toBe(true)
  })

  it('should infer types from custom component', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Link = (props: {to: string}) => null
    const MyComponent = forwardRefAs<{as?: AsProp}>(
      ({as: As = 'div', ...props}, ref) => <As ref={ref} {...props} />
    )

    render(<MyComponent as={Link} to='/home' />)
    expect(true).toBe(true)
  })

  it('should disallow types', () => {
    const MyComponent = forwardRefAs<{as?: AsProp}>(
      ({as: As = 'div', ...props}, ref) => <As ref={ref} {...props} />
    )

    // @ts-expect-error
    render(<MyComponent href='#foo' />)
    expect(true).toBe(true)
  })
})
