import { StyleSheet } from "react-native";

const PokeCardStyles = StyleSheet.create({
    card: {
        marginTop:25,
        marginBottom: 10,
        padding: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
        alignSelf:"center"
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        textTransform: "capitalize",
        textAlign:"center",
    },
    Text:{
        marginTop:20,
        fontSize:20,
        textAlign:"left",
        textTransform:"capitalize"
    },
    SecondaryText:{
        marginTop:20,
        fontSize:20,
        textAlign:"center",
        textTransform:"capitalize"
    }
});

export default PokeCardStyles;