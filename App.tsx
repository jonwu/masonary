import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MasonryList from './MasonryList';
import data from './data';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <MasonryList
          data={data}
          columns={2}
          getItemHeight={(item) => item.height}
          getFooterHeight={() => 100}
          renderFooter={() => <View style={{ height: 100, backgroundColor: 'yellow' }} />}
          getItemId={(item) => item.id}
          renderItem={(item) => <View style={{ height: item.height, width: item.width, backgroundColor: 'red' }} />}
        />
      </View>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
