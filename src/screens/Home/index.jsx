import React, { useEffect, useState } from 'react';
import {
  Switch,
  View,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions/items';
import List from '../../components/List/List';
import styles from './styles';

const {
  getItemsRequestAction,
} = actions;

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsRequestAction(isEnabled));
  }, [isEnabled]);

  return (
    <>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.text}>
          Sort by ID
      </Text>
      </View>
      <List />
    </>
  );
};

export default Home;
