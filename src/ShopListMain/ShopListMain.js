import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from '../List/List'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getListsForFolder } from '../lists-helpers'
import './ShopListMain.css'

export default class ShopListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderId } = this.props.match.params
    const { lists=[] } = this.context
    const listsForFolder = getListsForFolder(lists, folderId)
    return (
      <section className='ShopListMain'>
        <ul>
          {listsForFolder.map(list =>
            <li key={list.id}>
              <List
                id={list.id}
                name={list.name}
                modified={list.modified}
              />
            </li>
          )}
        </ul>
        <div className='ShopListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-list'
            type='button'
            className='ShopListMain__add-list-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            List
          </CircleButton>
        </div>
      </section>
    )
  }
}
