import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Keyboard,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/header'
import Footer from '../components/footer'
import Row from '../components/row'

const filterItems = (items, filter) => {
  return items.filter((item) => {
    if (filter === 'ALL') return true
    if (filter === 'COMPLETED') return item.complete
    if (filter === 'ACTIVE') return !item.complete
  })
}

class Todo extends Component {
  static navigationOptions = {
    title: 'Todo',
    drawerIcon: () => (
      <Icon name='list' size={20} color='#000' />
    ),

    drawerLabel: () => {
      return 'Todo'
    },
  }
  constructor (props) {
    super(props)
    this.state = {
      allComplete: false,
      value: '',
      items: [],
      datasource: [],
      filter: 'ALL'
    }
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.handleOnToggleAllComplete = this.handleOnToggleAllComplete.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
    this.handleClearComplete = this.handleClearComplete.bind(this)
    this.handleToggleEditing = this.handleToggleEditing.bind(this)
    this.handleUpdateText = this.handleUpdateText.bind(this)
  }

  componentWillMount() {
    AsyncStorage.getItem("items").then((json) => {
      try {
        const items = JSON.parse(json);
        this.setSource(items);
      } catch(e) {
        console.log('e', e);
      }
    })
  }

  handleAddItem () {
    let {value} = this.state

    if (!value) return

    const newItems = [
      ...this.state.datasource,
      {
        key: Date.now(),
        text: value,
        complete: false
      }
    ]

    this.setSource(newItems, {value: ''})
  }

  async setSource (items, otherState = {}) {
    let newItems = filterItems(items, this.state.filter)
    this.setState({
      items: [...newItems],
      datasource: items,
      ...otherState
    })
    AsyncStorage.setItem("items", JSON.stringify(items));
  }

  handleOnToggleAllComplete () {
    let {allComplete, items} = this.state
    const complete = !allComplete
    const newItems = items.map((item) => ({
      ...item,
      complete
    }))
    this.setSource(newItems, {allComplete: complete})
  }

  handleToggleComplete (key, complete) {
    const newItems = this.state.datasource.map((item) => {
      if (item.key !== key) return item
      return {
        ...item,
        complete
      }
    })

    this.setSource(newItems)
  }

  handleRemoveItem (key) {
    const newItems = this.state.datasource.filter((item) => {
      return item.key !== key
    })
    this.setSource(newItems)
  }

  handleFilter (filter) {
    this.setSource(this.state.datasource, {filter: filter})
  }

  handleClearComplete () {
    let newItems = filterItems(this.state.items, 'ACTIVE');
    this.setSource(newItems)
  }

  handleUpdateText (key, text) {
    const newItems = this.state.items.map((item) => {
      if (item.key !== key) return item;

      return {
        ...item,
        text
      }
    })

    this.setSource(newItems)
  }

  handleToggleEditing (key, editing) {
    const newItems = this.state.items.map((item) => {
      if (item.key !== key) return item;

      return {
        ...item,
        editing
      }
    })

    this.setSource(newItems)
  }

  render () {
    let {value} = this.state
    return (
      <View style={[styles.container]}>
        <Header
          value={value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({value})}
          onToggleAllComplete={this.handleOnToggleAllComplete}
        />
        <View style={[styles.content]}>
          <FlatList data={this.state.items}
            style={styles.list}
            keyboardShouldPersistTaps={'handled'}
            keyExtractor={(x, i) => i.toString()}
            ItemSeparatorComponent={() => {
              return (<View
                style={{
                  height: 1,
                  backgroundColor: '#CED0CE'
                }}
              />)
            }}
            renderItem={({item}) => (<Row
              key={item.key}
              onRemove={() => this.handleRemoveItem(item.key)}
              onUpdate={(text) => this.handleUpdateText(item.key, text)}
              onToggleEdit={(editing) => this.handleToggleEditing(item.key, editing)}
              {...item}
              onComplete={(complete) => this.handleToggleComplete(item.key, complete)} />)
            } />
        </View>
        <Footer
          count={filterItems(this.state.datasource, 'ACTIVE').length}
          onClearComplete={this.handleClearComplete}
          onFilter={this.handleFilter} filter={this.state.filter} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    opacity: 0.5,
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 10
  },
  list: {
    backgroundColor: '#FFF'
  }
})

export default Todo
