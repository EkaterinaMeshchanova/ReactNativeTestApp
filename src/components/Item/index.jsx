import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import actions from '../../store/actions/items';
import styles from './styles';

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

export default Item;