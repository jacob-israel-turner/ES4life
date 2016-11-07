import React from "react"
import {Heading, CodePane} from "spectacle"

export default () => (
  <div>
    <Heading size={3}>You can blame me for this...</Heading>
    <CodePane
      transition={["fade"]} 
      bgColor="secondary"
      lang="js"
      source={require('raw!../examples/SourceMaps.code')}/>
  </div>
)
