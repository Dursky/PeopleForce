import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {PostType, navigationType} from '../../types';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {addPost} from '../../reducer';
import {useNavigation} from '@react-navigation/native';
import {createPost} from '../../common/apiRequests';

export const AddPost = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<navigationType>();
  const [state, setState] = useState<PostType>({
    id: 0,
    title: '',
    description: '',
    createdAt: '',
  });

  const handleAddPost = async () => {
    try {
      await createPost({
        title: state.title,
        body: state.description,
      });

      console.log(state);
      dispatch(
        addPost({
          id: state.id,
          description: state.description,
          createdAt: new Date().toISOString(),
          title: state.title,
        }),
      );

      navigation.navigate?.('Posts');
    } catch (err) {
      console.error('Something went wrong AddPost: ', err);
    }
  };

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
        value={state.title}
        onChangeText={value =>
          setState(localState => ({...localState, title: value}))
        }
      />
      <Text style={styles.subText}>Description</Text>
      <TextInput
        style={styles.input}
        value={state.description}
        onChangeText={value =>
          setState(localState => ({...localState, description: value}))
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
