import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function TaskInput(props) {

    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
      };

      function addTaskHandler() {
          props.onAddTask(enteredTaskText);
          setEnteredTaskText('');
      }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style ={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="Your task!"
        

         onChangeText={taskInputHandler}
         value={enteredTaskText}
         />
         <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="Add Task" onPress={addTaskHandler} color="black"/>
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="black"/>
            </View>
        </View>
      </View>

      </Modal>
    )
};

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'black'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: 'white',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
        backgroundColor: "silver"
    }
  });
