import { View, Text, StyleSheet, Button } from "react-native";
export default Credit = function ({navigation}){
    const navToBack = () => navigation.goBack();
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Credits
                </Text>
            </View>
            <View>
                <Text style={styles.blockText}>
                    Dude who did everything: Daniel Jacobsen
                </Text>
            </View>

            <View style={styles.buttons}>
                <Button title='Back' onPress={navToBack}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    headingContainer: {
        padding: 20, 
        backgroundColor: '#006400',
        alignItems: 'center',
    },
    heading: {
        fontSize:30,
        color:'white',
    },
    blockText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        color:'white',
        lineHeight: 24,
    },
    buttons: {
        margin: 20,
        width: 90,
        alignSelf: 'center',
    },
})