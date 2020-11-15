<hr>
<div>
  <h1>
    forwardRefAs()
  </h1>
</div>

<blockquote>
A wrapper around <code>React.forwardRef()</code> that allows HTML attributes and prop types to
be inferred from an <code>as</code> prop.
</blockquote>

<pre>npm i forward-ref-as</pre>

<p>
  <a href="https://bundlephobia.com/result?p=forward-ref-as">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/forward-ref-as">
    <img alt="Types" src="https://img.shields.io/npm/types/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/forward-ref-as">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/jaredLunde/forward-ref-as">
    <img alt="Build status" src="https://img.shields.io/travis/com/jaredLunde/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/forward-ref-as">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/forward-ref-as?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<hr>

## Quick start

```tsx
import forwardRefAs from 'forward-ref-as'
import type {AsProp} from 'forward-ref-as'

// Forwards `ref` to the underlying button and adds strong
// types for the `as` prop.
const Button = forwardRefAs<ButtonProps, 'button'>(
  ({as: As = 'button', ...props}, ref) => <As ref={ref} {...props} />
)

interface ButtonProps {
  as?: AsProp
}

// ✅ Will pass type checking and autocomplete correctly
<Button as='a' href='https://jaredLunde.com'/>

// ❌ Will fail type checking and not autocomplete "href"
<Button href='#'>
```

## API

### forwardRefAs()

A wrapper around `React.forwardRef()` with the same call signature, but
a type signature that allows `as` prop HTML attributes and React prop types
to be inferred.

```typescript
function forwardRefAs<Props, DefaultAs extends AsProp = 'div'>(
  render: React.RefForwardingComponent<
    DefaultAs extends keyof JSX.IntrinsicElements
      ? FromReactType<DefaultAs>
      : DefaultAs,
    Props
  >
): ForwardRefAsExoticComponent<Props, DefaultAs>
```

## LICENSE

MIT
