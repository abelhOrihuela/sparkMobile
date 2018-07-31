import React, { Component } from 'react'
import { Text, View, TouchableOpacity,TouchableHighlight, FlatList, StyleSheet, Platform, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

class Notifications extends Component {
    static navigationOptions = {
      title: 'Notifications',
      drawerIcon: () => (
        <Icon name='bell' size={20} color='#000' />
      ),

      drawerLabel: () => {
        return 'Notifications'
      },
    }

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            modalVisible: false
        }
    }

    setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

    componentWillMount () {
        this.loadNotifications()
    }

    async loadNotifications () {
        try {
            const body = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.setState({
                notifications: body.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    showDetail (e, item) {
        this.props.navigation.push('NotificationDetail')
        // this.setState({
        //   modalVisible: !this.state.modalVisible
        // })
    }

    render () {
        let { notifications } = this.state
        return (
        <View style={[styles.content]}>
                <FlatList data={notifications}
                style={styles.list}
                keyboardShouldPersistTaps={'handled'}
                keyExtractor={(x, i) => i}
                ItemSeparatorComponent={() => {
                    return (<View
                        style={{
                            height: 1,
                            backgroundColor: '#CED0CE'
                        }}
                    />)
                }}
                    renderItem={({ item }) => (<TouchableOpacity onPress={(e) => this.showDetail(e, item)}>
                    <Text>Hola</Text>
                    </TouchableOpacity>)
                } />

                <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
        </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        opacity: 0.5
    },
    content: {
        flex: 10
    },
    list: {
        backgroundColor: '#FFF'
    }
})

export default Notifications
