import React from 'react'
import {Heading, List, ListItem, Appear, Text} from "spectacle"

export default () => (
  <div>
    <Heading size={1} caps fit textColor="primary" textFont="primary">
      The TC39 process
    </Heading>
    <Heading size={2} fit textColor="primary" textFont="primary">
      JavaScript evolved
    </Heading>
    <List>
      <Appear fid='1'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>TC39 is respobsible for evolving ECMAScript (or, JavaScript)</Text>
        </ListItem>
      </Appear>
      <Appear fid='2'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>Allows Strawman proposals</Text>
        </ListItem>
      </Appear>
      <Appear fid='2'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>Has four 'maturity' stages</Text>
        </ListItem>
      </Appear>
      <Appear fid='2'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>Uses a champion process to move a proposal through stages</Text>
        </ListItem>
      </Appear>
    </List>
  </div>
)
