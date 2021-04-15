import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Item from './Item'

const List = () => {
  const renderItem = ({ item, index }) => (
    <Item 
      firstName={item.firstName} 
      lastName={item.firstName} 
      id={item.id} 
      idx={index}  
      email={item.email}
      date={item.date}
      avatar={item.avatar}
    />
  );
    const items = useSelector(state => {
      return state.itemsReducers.items;
    });

    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

export default List;