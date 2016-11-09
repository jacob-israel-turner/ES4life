import React from "react"
import $ from 'jquery'
import {List, ListItem, Heading} from "spectacle"

import {es7plus} from '../data/'

const getListItem = ({ name, spec }) => <ListItem textColor='tertiary' key={name + spec}>{name}</ListItem>

export default class NewFeatures extends React.Component {
  componentDidMount() {
    const parent = $(this.ref).parent()
    parent.css('overflowY', 'scroll')
  }
  render() {
    return (
      <div ref={elem => this.ref = elem}>
        <Heading size={1} textColor='primary'>
          ES7+
        </Heading>
        <Heading size={4} textColor='primary'>
          Can't use in Domo... yet. 😉
        </Heading>
        <List>
          {es7plus.map(getListItem)}
        </List>
      </div>
    )
  }
}

