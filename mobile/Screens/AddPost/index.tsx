import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {PostType} from '../../types';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';

export const AddPost = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<PostType>({
    id: 0,
    title: '',
    description: '',
    createdAt: '',
  });

  const handleAddPost = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Add Post</Text>
      <Text style={styles.subText}>ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={value =>
          setState(localState => ({...localState, id: parseInt(value, 10)}))
        }
      />
      <Text style={styles.subText}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={value =>
          setState(localState => ({...localState, title: value}))
        }
      />
      <Text style={styles.subText}>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={value =>
          setState(localState => ({...localState, description: value}))
        }
      />
      <Text style={styles.subText}>CreatedAt</Text>
      <TextInput
        style={styles.input}
        onChangeText={value =>
          setState(localState => ({...localState, createdAt: value}))
        }
      />
      <View style={styles.buttonPlacing}>
        <Button content="Create" onPress={handleAddPost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
  },
  mainText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  subText: {
    fontSize: 15,
    color: 'black',

    textAlign: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#353535',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonPlacing: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
});
