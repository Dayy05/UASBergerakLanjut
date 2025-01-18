import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    paddingTop: 20,
  },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#1f1f1f', // Dark item background
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for name
  },
  email: {
    fontSize: 14,
    color: '#ccc', // Lighter text for email
  },
});

export default UserList;
