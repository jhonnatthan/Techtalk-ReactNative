import React, { Component } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';
import TodoApi from '../../providers/todo';

export default class HomePage extends Component {
    state = {
        todos: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({loading: true});
        const todos = await TodoApi.getAll();
        this.setState({todos, loading: false});
    }

    async addTodo(text) {
        this.setState({loading: true});
        let { todos } = this.state;

        const created = await TodoApi.addTodo({name: text});

        if(created) {
            todos.push(created);
            this.setState({ todos });
        } else {
            Alert.alert(
                'Erro',
                'Erro ao adicionar a tarefa a sua lista',
                [
                    {
                        text: 'Ok'
                    }
                ]
            )
        }
        
        this.setState({loading: false});
    }

    async removeTodo(id) {
        this.setState({loading: true});
        let { todos } = this.state;
        const deleted = await TodoApi.removeTodo(id);
        todos = todos.filter(item => item.id != id);
        this.setState({ todos, loading: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <TodoInput
                    onSend={(text) => this.addTodo(text)} />
                {(this.state.loading) ? <ActivityIndicator /> : null}
                {this.state.todos.map(item => {
                    return <TodoItem key={item.id} text={item.name} onRemove={() => this.removeTodo(item.id)} />
                })}
            </View>
        )
    }
}