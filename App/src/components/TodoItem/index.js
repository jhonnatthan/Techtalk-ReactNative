import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import styles from './styles';

export default class TodoItem extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Remover" color="#FF0000" onPress={() => this.props.onRemove()} />
                </View>
            </View>
        )
    }
}
