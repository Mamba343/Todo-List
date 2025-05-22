import { supabase } from "../supabaseClient";

/* Fetch all todos from the Supabase "todo" table and update state */
export async function GetAllTodos(setTodos) {
  const { data } = await supabase.from("todo").select();
  console.log(data);
  setTodos(data);
}

/* Add a new todo to Supabase and reset input fields if successful */
export async function handleSubmitTodo(newTodo, description, setNewTodo, setDescription, setVersion) {
  const { error } = await supabase.from("todo").insert({
    todos: newTodo,
    description: description,
  });

  if (!error) {
    setNewTodo("");
    setDescription("");
    setVersion(prev => prev + 1);
  }
}

/* Mark a todo as completed by updating "isCompleted" field */
export async function handleCompleteTodo(id, setVersion) {
  const { error } = await supabase.from("todo").update({ isCompleted: true }).eq("id", id);

  if (!error) setVersion(prev => prev + 1);
}

/* Delete a todo item by ID */
export async function handleDeleteTodo(id, setVersion) {
  const { error } = await supabase.from("todo").delete().eq("id", id);

  if (!error) setVersion(prev => prev + 1);
}
