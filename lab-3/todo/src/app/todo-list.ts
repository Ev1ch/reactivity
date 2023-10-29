import TodoItem from './todo-item';

export default class TodoList {
  constructor(public user: string, private _items: TodoItem[] = []) {}

  public get items(): readonly TodoItem[] {
    return this._items;
  }

  public addItem(task: string) {
    this._items.push(new TodoItem(task));
  }
}
