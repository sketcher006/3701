// Home.js

import { View, Text, StyleSheet, Button } from "react-native";
export default Home = function ({navigation}) {
    const navToRules = () => navigation.navigate('Rules');
    const navToCredit = () => navigation.navigate('Credit');
    const steps = ['','','','','','','','',''];
    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.heading}>Tic-Tac-Toe-Bro!</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View>
                    <Button title='<' onPress={navToRules}></Button>
                </View>
                <View style={styles.buttons}>
                    <Button title='New Game' onPress={navToCredit}></Button>
                </View>
                <View>
                    <Button title='>' onPress={navToCredit}></Button>
                </View>
            </View>

            <View style={styles.gameBoard}>
                <Board steps={steps} />
            </View>
        
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button title='Rules' onPress={navToRules}>
                        Go to rules
                    </Button>
                </View>

                <View style={styles.buttons}>
                    <Button title='Credits' onPress={navToCredit}>
                        Go to credits
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC3FF', // main page bg color
        alignItems: 'center',
        margin:20,
    },
    heading: {
        fontSize: 40,
        margin: 20,
    },      
    gameBoard: { // the yellow part
        margin: 40,
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    buttons: {
        marginHorizontal: 10,
        width: 90,
    },
})