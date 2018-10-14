import Api from '../api';

export default class TodoApi {
    static async getAll() {
        return await Api.get('todo');
    }

    static async addTodo(data) {
        return await Api.post('todo', data);
    }

    static async removeTodo(id) {
        return await Api.delete('todo/' + id);
    }
}