import React, { Component } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

export default class TodoInput extends Component {

    state = {
        text: ''
    }

    handlerSend() {
        if (this.state.text != '') {
            this.props.onSend(this.state.text);
            this.setState({ text: '' });
            this.textInput.clear();
        } else {
            Alert.alert(
                'Erro',
                'Preencha o campo corretamente',
                [
                    {
                        text: 'Ok'
                    }
                ]
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={input => this.textInput = input}
                        clearButtonMode="always"
                        placeholder="Digite o nome da TODO"
                        autoCapitalize="words"
                        style={styles.input}
                        onChangeText={(text) => this.setState({ text })} />
                </View>
                <View> 
                    <Button title="Enviar" onPress={() => {
                        this.handlerSend()
                    }} />
                </View>
            </View>
        )
    }
}
