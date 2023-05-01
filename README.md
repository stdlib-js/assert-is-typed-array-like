<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isTypedArrayLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is [typed-array][mdn-typed-array]-like.



<section class="usage">

## Usage

```javascript
import isTypedArrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs';
```

#### isTypedArrayLike( value )

Tests if a value is [typed-array][mdn-typed-array]-like.

```javascript
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs';

var bool = isTypedArrayLike( new Int16Array() );
// returns true

bool = isTypedArrayLike({
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'BYTES_PER_ELEMENT': 4
});
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, no-unused-vars -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs';
import isTypedArrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs';

var bool;
var arr;

arr = {
    'BYTES_PER_ELEMENT': 8,
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10
};
bool = isTypedArrayLike( arr );
// returns true

bool = isTypedArrayLike( new Int8Array( 4 ) );
// returns true

bool = isTypedArrayLike( [] );
// returns false

bool = isTypedArrayLike( {} );
// returns false

bool = isTypedArrayLike( null );
// returns false

bool = isTypedArrayLike( 'beep' );
// returns false

bool = isTypedArrayLike( function foo( a, b ) {} );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-typed-array-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-typed-array-like

[test-image]: https://github.com/stdlib-js/assert-is-typed-array-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-typed-array-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-typed-array-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-typed-array-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-typed-array-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-typed-array-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-typed-array-like/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-typed-array-like/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-typed-array-like/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-typed-array-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-typed-array-like/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
