import { View, Text, StyleSheet, Button, ScrollView, FlatList } from "react-native";
import { loadSaveGameData } from "../datamodel/storage";
import { useState, useEffect } from "react";
import LoadModule from "../components/LoadModule";
import { deleteSave, loadSave } from "../datamodel/storage";

export default Load = function ({navigation}){
    
    const[loadedData, setLoadedData] = useState([]);


    useEffect(() => {
        const fetchSavedGames = async () => {
            try {
                const data = await loadSaveGameData();
                console.log("Data:", data);
                console.log("Data.gameStates:", data.gameStates.length);
                console.log(typeof data.gameStates);
                setLoadedData(data);
            } catch (error) {
                console.error("Error loading saved games:", error);
                // Handle the error as needed
            }
        };
    
        fetchSavedGames();
    }, []);
    

    const navToBack = () => navigation.goBack(); 
    
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Load Game
                </Text>
            </View>
            
            
                    <View style={styles.savedGamesContainer}>
                        <FlatList
                            data={loadedData.gameStates}
                            renderItem={({ item, index }) => (
                                <LoadModule gameState={item} del={deleteSave} load={loadSave} index={index} />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                        />
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
        marginBottom: 10,
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