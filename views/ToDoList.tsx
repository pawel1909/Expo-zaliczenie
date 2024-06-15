import React, { useState } from "react";
import { View, Button, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import TodoItem from "./ToDoItem";


const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>(['Wyrzucić śmieci', 'Odpocząć']);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.length > 0) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <View>
            {todos.map((todo, index) => (
                <View style={styles.itemContainer}>
                    <TodoItem title={todo} />
                    <TouchableOpacity style={styles.deleteButton} onPress={() => removeTodo(index)}>
                        <Text style={styles.deleteButtonText}>Usuń</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TextInput
            value={newTodo}
            onChangeText={setNewTodo}
            placeholder="New"
            />
            <Button title="Dodaj" onPress={addTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#ffffff',
    },
});

export default ToDoList;