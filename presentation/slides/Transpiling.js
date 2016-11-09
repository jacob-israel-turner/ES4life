import React from "react"
import {Appear, Heading, CodePane} from "spectacle"

const code = require('raw!../examples/ItWasWorthIt.code')

export default () => (
  <div>
    <Appear fid='1'>
      <Heading size={1} caps fit textColor="primary">
        Despite the sourcemaps...
      </Heading>
    </Appear>
    <Appear fid='2'>
      <div>
        <Heading size={1} caps fit textColor="primary">
          it was all worth it
        </Heading>
        <CodePane
          textSize={18}
          transition={["fade"]} 
          bgColor="secondary"
          lang="js"
          source={code}/>
      </div>
    </Appear>
  </div>
)
