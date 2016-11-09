import React from "react"
import {Heading, CodePane, Text, Appear} from "spectacle"

const colorSchemes = {
  a: {
    textColor: 'primary',
    bgColor: 'black'
  },
  b: {
    textColor: 'secondary',
    bgColor: 'secondary'
  }
}

export default ({name, es6, es5, scheme}) => {
  const colorScheme = colorSchemes[scheme] 
  return (
    <div>
      <Heading size={1} textColor={colorScheme.textColor}>
        {name}
      </Heading>
      <Appear fid='1'>
        <div>
          <Heading size={5} textColor={colorScheme.textColor}>
            ES5
          </Heading>
          <CodePane
            margin={8}
            transition={["fade"]}
            bgColor={colorScheme.bgColor}
            lang="js"
            source={es5}/>
        </div>
      </Appear>
      <Appear fid='2'>
        <div>
          <Heading size={5} textColor={colorScheme.textColor}>
            ES6
          </Heading>
          <CodePane
            margin={8}
            transition={["fade"]}
            bgColor={colorScheme.bgColor}
            lang="js"
            source={es6}/>
        </div>
      </Appear>
    </div>
  )
}


