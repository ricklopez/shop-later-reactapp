import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findList, findFolder } from '../lists-helpers'
import './ShopPageNav.css'

export default class ShopPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { lists, folders, } = this.context
    const { listId } = this.props.match.params
    const list = findList(lists, listId) || {}
    const folder = findFolder(folders, list.folderId)
    return (
      <div className='ShopPageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='ShopPageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {folder && (
          <h3 className='ShopPageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    )
  }
}
