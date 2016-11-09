import React from "react"
import $ from 'jquery'
import {List, ListItem, Heading} from "spectacle"

import {es6} from '../data/'

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
          ES6
        </Heading>
        <Heading size={4} textColor='primary'>
          Usable in Domo!
        </Heading>
        <List>
          {es6.map(getListItem)}
        </List>
      </div>
    )
  }
}

