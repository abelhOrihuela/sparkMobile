import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Platform } from 'react-native'
import axios from 'axios'

class Notifications extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
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
        console.log('====================================')
        console.log(e.target)
        console.log(item)
        console.log('====================================')
        this.props.navigation.navigate('NotificationDetail')

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

export default Notifications