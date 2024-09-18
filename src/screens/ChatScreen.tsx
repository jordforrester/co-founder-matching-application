import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import FadeInView from '../components/FadeInView';
import { globalStyles, colors } from '../utils/theme';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'match';
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi there!', sender: 'match' },
    { id: '2', text: 'Hello! Nice to meet you.', sender: 'user' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: newMessage, sender: 'user' },
      ]);
      setNewMessage('');
    }
  };

  return (
    <FadeInView style={globalStyles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.matchMessage]}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <Input
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} style={styles.sendButton} />
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  matchMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  sendButton: {
    width: 100,
  },
});

export default ChatScreen;