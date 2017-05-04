import React from "react"
import {Heading, List, ListItem, Appear, Text, Image} from "spectacle"

export default () => (
  <div>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Who am I?
    </Heading>
    <List>
      <Appear fid='1'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>I've been at Domo for ~5 months</Text>
        </ListItem>
      </Appear>
      <Appear fid='2'>
        <ListItem textColor='tertiary'>
          <Text textColor='primary'>I've been on teams Matrix and Gambit</Text>
        </ListItem>
      </Appear>
    </List>
  </div>
)
