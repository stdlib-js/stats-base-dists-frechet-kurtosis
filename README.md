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

# Kurtosis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_kurtosis" align="center" raw="\operatorname{Kurt} = \begin{cases} -6+{\frac{\Gamma \left(1-{\frac{4}{\alpha }}\right)-4\Gamma \left(1-{\frac{3}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+3\Gamma^{2}\left(1-{\frac{2}{\alpha }}\right)}{\left[\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right]^{2}}} & {\text{ for }}\alpha >4\\\ \infty & \text{ otherwise }\end{cases}" alt="Kurtosis for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt} = \begin{cases} -6+{\frac{\Gamma \left(1-{\frac{4}{\alpha }}\right)-4\Gamma \left(1-{\frac{3}{\alpha }}\right)\Gamma \left(1-{\frac{1}{\alpha }}\right)+3\Gamma^{2}\left(1-{\frac{2}{\alpha }}\right)}{\left[\Gamma \left(1-{\frac{2}{\alpha }}\right)-\Gamma^{2}\left(1-{\frac{1}{\alpha }}\right)\right]^{2}}} &amp; {\text{ for }}\alpha &gt;4\\\ \infty &amp; \text{ otherwise }\end{cases}" data-equation="eq:frechet_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/kurtosis/docs/img/equation_frechet_kurtosis.svg" alt="Kurtosis for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-kurtosis
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats-base-dists-frechet-kurtosis' );
```

#### kurtosis( alpha, s, m )

Returns the [excess kurtosis][kurtosis] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = kurtosis( 5.0, 1.0, 1.0 );
// returns ~45.092

y = kurtosis( 5.0, 10.0, 1.0 );
// returns ~45.092

y = kurtosis( 5.0, 1.0, 2.0 );
// returns ~45.092
```

If `0 < alpha <= 4`, the function returns `+Infinity`.

```javascript
var y = kurtosis( 2.5, 1.0, 1.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = kurtosis( NaN, 1.0, -2.0 );
// returns NaN

y = kurtosis( 1.0, NaN, -2.0 );
// returns NaN

y = kurtosis( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 0.0, 3.0, 2.0 );
// returns NaN

y = kurtosis( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 1.0, 0.0, 2.0 );
// returns NaN

y = kurtosis( 1.0, -1.0, 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var kurtosis = require( '@stdlib/stats-base-dists-frechet-kurtosis' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*20.0 ) - 40.0;
    y = kurtosis( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, Kurt(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-kurtosis.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-kurtosis

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-kurtosis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-kurtosis?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-kurtosis.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-kurtosis/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-kurtosis/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-kurtosis/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
