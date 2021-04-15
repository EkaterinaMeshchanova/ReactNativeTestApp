import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import actions from '../store/actions/itemsActions';

const { showItemInfoAction } = actions;
const Item = ({ firstName, lastName, idx, id, email, date, avatar }) => {
  const dispatch = useDispatch();
  
  const infoVisible = useSelector(state => state.itemsReducers.items[idx].infoVisible);

  const handlePressItem = () => {
    dispatch(showItemInfoAction(id));
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePressItem}>
      <Text style={styles.title}>{id} {firstName} {lastName}</Text>
      {infoVisible && <View style={styles.content}>
        <Image 
          style={styles.img}
          source={{
          uri: avatar,
        }}/>
        <View>
          <Text style={styles.title}>{email}</Text>
          <Text style={styles.title}>{date}</Text>
        </View>
      </View>}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
  },
  img: {
    height: 50,
    width: 50
  }
});

export default Item;