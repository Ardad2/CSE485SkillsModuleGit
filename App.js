import {useState} from 'react';
import { 
  StyleSheet,  
  View, 
  FlatList, Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseTasks, setCourseTasks] = useState([]);

  function startAddTaskHandler() {
    setModalIsVisible(true);
  }

  function endAddTaskHandler() {
    setModalIsVisible(false);
  }
  
  function addTaskHandler(enteredTaskText) {
    setCourseTasks(currentCourseTasks => [...currentCourseTasks, {text: enteredTasktext, id: Math.random().toString() }       ]);
  endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setCourseTasks( (currentCourseTasks) => {
      return currentCourseTasks.filter((task) => task.id != id);
    } );
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Task' color = "#a065ec" onPress={startAddTaskHandler}/>
    <TaskInput
     visible={modalIsVisible} 
     onAddTask={addTaskHandler} 
     onCancel={endAddTaskHandler}
     />
      <View style={styles.tasksContainer}>
        <FlatList data={courseTasks} renderItem = {itemData => {
          return <TaskItem 
          text={itemData.item.text} 
          id = {itemData.item.id}
          onDeleteItem={deleteTaskHandler}
          />

        }}
        keyExtractor={(item,index) => {return item.id}} 
        alwaysBounceVertical={false}
        /> 
        </View>
      </View>
        </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
    //You can add a "backgroundColor" in app.json.
  },
  tasksContainer: {
    flex: 5
  },
});