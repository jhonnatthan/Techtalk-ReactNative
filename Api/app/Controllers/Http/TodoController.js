'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Todo = use("App/Models/Todo");

class TodoController {
  async index () {
	  const todos = await Todo.all();
	  return todos;
  }

  async store ({ request }) {
	  const data = request.only(['name']);
	  const todo = await Todo.create({completed: false, ...data});
	  return todo;
  }

  async destroy ({ params }) {
	  const todo = await Todo.findOrFail(params.id);
	  await todo.delete();
	  return {
		  'deleted': true
	  };
  }
}

module.exports = TodoController
