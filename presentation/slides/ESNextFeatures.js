import React from "react"
import $ from 'jquery'
import {List, ListItem, Heading} from "spectacle"

import {esNext} from '../data/'

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
          ESNext
        </Heading>
        <Heading size={4} textColor='primary'>
          non-standard
        </Heading>
        <List>
          {esNext.map(getListItem)}
        </List>
      </div>
    )
  }
}

