import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.title}>Food Diary</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "white",
        width: 395,
        height: 50
    },
    title: {
        color: "white",
        fontWeight: "bold"
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
});

