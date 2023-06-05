import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Search Recipes"
            style={styles.input}/>
        </View>
    )
};

export default SearchBar;

const styles = StyleSheet.create ({
    input: {
        height: 40,
        width: 370,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        color: "black"
    },
    container: {
        backgroundColor: "#b2beb3",
        padding: 10
    }
})