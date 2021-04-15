import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import actions from '../store/actions/itemsActions';
import List from '../components/List'
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

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10
  }
});

export default Home;
