// This file was generated by ./scripts/generate-readme.js
import { h } from "hyperapp"

import { Link } from "../../../src"

export default function Readme() {
  return (
    <div class="content">
      <h1 id="hyperapp-hash-router">hyperapp-hash-router</h1>
      <p>
        <a href="https://www.npmjs.com/package/hyperapp-hash-router">
          <img
            src="http://img.shields.io/npm/v/hyperapp-hash-router.svg"
            alt="NPM version"
          />{" "}
        </a>
        <a href="https://codeclimate.com/github/yuku-t/hyperapp-hash-router/maintainability">
          <img
            src="https://api.codeclimate.com/v1/badges/1f1a1bba3e76976e7b6e/maintainability"
            alt="Maintainability"
          />{" "}
        </a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/@hyperapp/router">
          @hyperapp/router
        </a>{" "}
        compatible router library based on <code>location.hash</code>.
      </p>
      <p>
        <a href="https://yuku-t.com/hyperapp-hash-router/#/demo">Demo</a>
      </p>
      <h2 id="installation">Installation</h2>
      <p>
        If your project is using npm, you can install{" "}
        <a href="https://www.npmjs.com/package/hyperapp-hash-router">
          hyperapp-hash-router
        </a>{" "}
        package by npm command:
      </p>
      <pre>
        <code class="lang-bash">npm install --save hyperapp-hash-router</code>
      </pre>
      <h3 id="distribution-files">Distribution files</h3>
      <ul>
        <li>
          <strong>dist/index.js</strong> - The CommonJS version of this package.
          (default)
        </li>
        <li>
          <strong>dist/index.mjs</strong> - The ES Modules version of this
          package.
        </li>
        <li>
          <strong>dist/hyperapp-hash-router.js</strong>,{" "}
          <strong>dist/hyperapp-hash-router.min.js</strong> - The UMD version of
          this package. This version exports itself to{" "}
          <code>window.hyperappHashRouter</code>.
        </li>
      </ul>
      <h3 id="usage">Usage</h3>
      <pre>
        <code class="lang-js">
          import &#123; Link, Route, Switch, Redirect, location &#125; from
          &quot;hyperapp-hash-router&quot;
        </code>
      </pre>
      <p>
        <a href="https://www.npmjs.com/package/hyperapp-hash-router">
          hyperapp-hash-router
        </a>{" "}
        is compatible with{" "}
        <a href="https://www.npmjs.com/package/@hyperapp/router">
          @hyperapp/router
        </a>{" "}
        so you can use these objects as described in{" "}
        <a href="https://github.com/hyperapp/router#usage">
          @hyperapp/router&#39;s README document
        </a>.
      </p>
    </div>
  )
}