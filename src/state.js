let appState = {
  todos: [
    {
      text: "Save the cheerleader",
      completed: false,
      id: "heroes"
    },
    { text:    "Save the world",
      completed: false,
      id: "reborn"
    }
  ],
  filter: null,
  editing: {
    todoId: null,
    text: null
  }
}

export default appState;
