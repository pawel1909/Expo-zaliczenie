import React from "react";
import { Text, View } from "react-native";

interface TodoItemProps
{
    title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default TodoItem;