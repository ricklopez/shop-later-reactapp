import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShopListNav from '../ShopListNav/ShopListNav'
import ShopPageNav from '../ShopPageNav/ShopPageNav'
import ShopListMain from '../ShopListMain/ShopListMain'
import ShopPageMain from '../ShopPageMain/ShopPageMain'
import AddFolder from '../AddFolder/AddFolder'
import AddList from '../AddList/AddList'
import ApiContext from '../ApiContext'
import config from '../config'
import './App.css'

class App extends Component {
  state = {
    lists: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/lists`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([listsRes, foldersRes]) => {
        if (!listsRes.ok)
          return listsRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          listsRes.json(),
          foldersRes.json(),
        ])
      })
      .then(([lists, folders]) => {
        this.setState({ lists, folders })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
  }

  handleAddList = list => {
    this.setState({
      lists: [
        ...this.state.lists,
        list
      ]
    })
  }

  handleDeleteList = listId => {
    this.setState({
      lists: this.state.lists.filter(list => list.id !== listId)
    })
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={ShopListNav}
          />
        )}
        <Route
          path='/list/:listId'
          component={ShopPageNav}
        />
        <Route
          path='/add-folder'
          component={ShopPageNav}
        />
        <Route
          path='/add-list'
          component={ShopPageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={ShopListMain}
          />
        )}
        <Route
          path='/list/:listId'
          component={ShopPageMain}
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-list'
          component={AddList}
        />
      </>
    )
  }

  render() {
    const value = {
      lists: this.state.lists,
      folders: this.state.folders,
      addFolder: this.handleAddFolder,
      addList: this.handleAddList,
      deleteList: this.handleDeleteList,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>ShopLater</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App
