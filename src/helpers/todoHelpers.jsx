import { supabase } from "../supabaseClient";


export async function GetAllTodos(setTodos) {
    const {data} = await supabase.from("todo").select();
    console.log(data);
    setTodos(data);
}

export async function handleSubmitTodo(newTodo, description, setNewTodo, setDescription, setVersion) {
  const { error } = await supabase.from('todo').insert({
    todos: newTodo,
    description: description
  });

  if (!error) {
    setNewTodo("");
    setDescription("");
    setVersion(prev => prev + 1);
  }
}


export async function handleCompleteTodo(id, setVersion) {
  const { error } = await supabase.from('todo').update({ isCompleted: true }).eq('id', id);

  if (!error) setVersion(prev => prev + 1);
}


export async function handleDeleteTodo(id, setVersion) {
  const { error } = await supabase.from("todo").delete().eq('id', id);

  if (!error) setVersion(prev => prev + 1);
}



