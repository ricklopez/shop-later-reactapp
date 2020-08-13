import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { countListsForFolder } from '../lists-helpers'
import './ShopListNav.css'

export default class SHopListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { folders=[], lists=[] } = this.context
    return (
      <div className='ShopListNav'>
        <ul className='ShopListNav__list'>
          {folders.map(folder =>
            <li key={folder.id}>
              <NavLink
                className='ShopListNav__folder-link'
                to={`/folder/${folder.id}`}
              >
                <span className='ShopListNav__num-lists'>
                  {countListsForFolder(lists, folder.id)}
                </span>
                {folder.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='ShopListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-folder'
            type='button'
            className='ShopListNav__add-folder-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Folder
          </CircleButton>
        </div>
      </div>
    )
  }
}
