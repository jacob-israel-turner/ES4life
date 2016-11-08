import React from "react"
import {Appear, Heading, CodePane} from "spectacle"

const code = require('raw!../examples/ItWasWorthIt.code')

export default () => (
  <div>
    <Appear fid='1'>
      <div>
        <Heading size={1} caps fit>
          Let's get started!
        </Heading>
        <Heading size={1}>
          🎉
        </Heading>
      </div>
    </Appear>
  </div>
)
