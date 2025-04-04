import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#FFCC00", 
        padding: 20,
    },
    scrollView: {
        flexGrow: 1, 
        maxWidth: 700,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white", 
        textAlign: "center",
    },
    pressable:{
        backgroundColor: "red",
        borderRadius: 10,
        height: 40,
    },
    input: {
      width: "80%",
      height: 40,
      borderWidth: 1,
      borderColor: "#3b4cca",
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: "#fff",
      marginBottom: 10,
    },
});

export default HomeScreenStyles;