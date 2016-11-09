// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import {
  Intro,
  Jacob,
  YouCanBlameMe,
  Transpiling,
  LetsGetStarted,
  ES6Features,
  ES7Features,
  ESNextFeatures,
  Example,
  TC39,
  Conclusion,
  QnA,
} from './slides'

import examples from './examples.js'

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#99CCEE",
  secondary: '#222222'
}, {
  primary: `"Open Sans", Helvetica, Arial, sans-serif`
});

export default class Presentation extends React.Component {
  getExampleSlides() {
    return examples.map(({name, es6, es5}, index) => (
        <Slide key={name} bgColor={index % 2 ? 'secondary' : 'primary'}>
          <Example 
            scheme={index % 2 ? 'a' : 'b'}
            name={name}
            es6={es6}
            es5={es5}
          />
        </Slide>
      ))
  }
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress='none'>
          <Slide transition={["zoom"]} bgColor="primary">
            <Intro />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" notes="You can even put notes on your slide. How awesome is that?">
            <Jacob />
          </Slide>
          <Slide>
            <YouCanBlameMe />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Transpiling />
          </Slide>
          <Slide bgColor='secondary'>
            <TC39 />
          </Slide>
          <Slide bgColor='secondary'>
            <ES6Features />
          </Slide>
          <Slide bgColor='secondary'>
            <ES7Features />
          </Slide>
          <Slide bgColor='secondary'>
            <ESNextFeatures />
          </Slide>
          <Slide bgColor='secondary'>
            <LetsGetStarted />
          </Slide>
          {this.getExampleSlides()}
          <Slide bgColor='secondary'>
            <Conclusion />
          </Slide>
          <Slide bgColor='primary'>
            <QnA />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
