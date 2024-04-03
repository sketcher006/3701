import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
export default Credit = function ({navigation}){
    
    const[loadedData, setLoadedData] = useState(null);

    const handleModalOpen = async (modalType) => {
        if (modalType === "load") {
            try {
                const loadedData = await handleLoadModal(); // returns object with previous saved game data
                console.log("loadedData", loadedData);
                console.log(typeof loadedData);
                setLoadedData(loadedData);
                // const formattedData = displaySavedData(loadedData);
                // console.log("formattedData", formattedData);
                setModalVisible("load");
                // return formattedData;
            } catch (error) {
                console.log("Error loading game: ", error);
                alert("Error loading game: ", error);
            }
        } else {
            setModalVisible(modalType);
        }
    };

    // I THINK THIS SHOULD ALL BE IN THE GAME OR STORAGE FILE, RENDER EVERYTHING INSIDE THE savedgamescontainer
    // over there and then render it here on the load screen?
    const navToBack = () => navigation.goBack();
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Load Game
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.savedGamesContainer}>
                        <View style={styles.singelGame}>
                            <View style={styles.gameDetail}>
                                <Text>Game details go here</Text>
                                {loadedData && displaySavedData(loadedData)}
                                <View style={styles.gameButtons}>
                                    <View style={styles.buttons}>
                                        <Button style={styles.buttons} title="Delete" onPress={navToBack} />
                                    </View>
                                    <View style={styles.buttons}>
                                        <Button style={styles.buttons} title="Load" onPress={handleLoadClick()} />
                                    </View>
                                </View>

                            </View>

                        </View>

                    </View>
                    
                    
                    
                    
                    
                </View>
                
            </ScrollView>
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
        fontSize:18,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        color:'white',
        lineHeight: 24,
    },
    scrollView: {
        flex: 1,
    },
    savedGamesContainer: {
        margin: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        height: 630,
    },
    singelGame: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    buttons: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        width: 90,
        alignSelf: 'center',
    },
    gameButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})


// <Modal
//                     animationType="fade"
//                     transparent={true}
//                     visible={modalVisible === "load"}
//                     onRequestClose={() => {
//                         setModalVisible(null);
//                     }}
//                 >
//                     <View style={styles.modalPopUp}>
//                         <Text style={styles.modalHeading}>Load Game</Text>
//                         <View style={styles.modalMessageBox}>
//                             {loadedData && displaySavedData(loadedData)}
//                             <View style={styles.buttonsContainer}>
//                                 <View style={styles.buttons}>
//                                     <Button title="Close" onPress={() => setModalVisible(null)} />
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </Modal>
//                     {/* <Button title='Load' onPress={handleLoadClick}>
//                         Load game
//                     </Button> */}