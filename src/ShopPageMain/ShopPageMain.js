import React from 'react'
import List from '../List/List'
import ApiContext from '../ApiContext'
import { findList } from '../lists-helpers'
import './ShopPageMain.css'

export default class ShopPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteList = listId => {
    this.props.history.push(`/`)
  }

  render() {
    const { lists=[] } = this.context
    const { listId } = this.props.match.params
    const list = findList(lists, listId) || { content: '' }
    return (
      <section className='ShopPageMain'>
        <List
          id={list.id}
          name={list.name}
          modified={list.modified}
          onDeleteList={this.handleDeleteList}
        />
        <div className='ShopPageMain__content'>
          {list.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
