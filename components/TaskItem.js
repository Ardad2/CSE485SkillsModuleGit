import { StyleSheet, View, Text, Pressable } from 'react-native';

function TaskItem(props) {

    

    return (
        <View style={styles.taskItem}>
        <Pressable 
        android_ripple ={{color:'#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
        > 
        <Text style={styles.taksText}>{props.text}</Text>
        </Pressable>
        </View>
    );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  },
  taskText: {
    color: 'white',
    padding: 8,
  }
});