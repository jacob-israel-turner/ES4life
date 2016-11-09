import React from "react"
import {Heading, List, ListItem, Appear, Text, S} from "spectacle"

export default () => (
  <div>
    <Heading size={1} caps fit textColor="primary" textFont="primary">
      Why is ES6, ES7, etc. important?
    </Heading>
    <List>
      <Appear fid='1'>
        <ListItem textColor='primary'>
          <S type='strikethrough'>It's shiny! ☀</S>
        </ListItem>
      </Appear>
      <Appear fid='2'>
        <ListItem textColor='primary'>
          <S type='strikethrough'>It's fun to write! 😁 </S>
        </ListItem>
      </Appear>
      <Appear fid='3'>
        <ListItem textColor='primary'>
          <Text textColor='primary'>It's easier to read/understand 😍 </Text>
        </ListItem>
      </Appear>
      <Appear fid='4'>
        <ListItem textColor='primary'>
          <Text textColor='primary'>Should result in faster iteration and better UX. 😎 </Text>
        </ListItem>
      </Appear>
    </List>
  </div>
)
