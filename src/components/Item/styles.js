import { StyleSheet, } from 'react-native';

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

export default styles;
