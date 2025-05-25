import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

    const handleResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <PaperProvider>

      <View style={styles.container}>
        
        <Text style={styles.display}>{input || '0'}</Text>
        <Text style={styles.result}>{result ? `= ${result}` : ''}</Text>

        <View style={styles.buttonsRow}>
          <Button mode="contained" onPress={() => setInput('')}>C</Button>
          <Button mode="contained" onPress={() => setInput(input + '/')}>/</Button>
          <Button mode="contained" onPress={() => setInput(input + '*')}>*</Button>
          <Button mode="contained" onPress={() => setInput(input + '-')}>-</Button>
        </View>

        <View style={styles.buttonsRow}>
          <Button mode="contained" onPress={() => setInput(input + '7')}>7</Button>
          <Button mode="contained" onPress={() => setInput(input + '8')}>8</Button>
          <Button mode="contained" onPress={() => setInput(input + '9')}>9</Button>
          <Button mode="contained" onPress={() => setInput(input + '+')}>+</Button>
        </View>

        <View style={styles.buttonsRow}>
          <Button mode="contained" onPress={() => setInput(input + '4')}>4</Button>
          <Button mode="contained" onPress={() => setInput(input + '5')}>5</Button>
          <Button mode="contained" onPress={() => setInput(input + '6')}>6</Button>
          <Button mode="contained" onPress={handleResult}>=</Button>
        </View>

        <View style={styles.buttonsRow}>
          <Button mode="contained" onPress={() => setInput(input + '1')}>1</Button>
          <Button mode="contained" onPress={() => setInput(input + '2')}>2</Button>
          <Button mode="contained" onPress={() => setInput(input + '3')}>3</Button>
          <Button mode="contained" onPress={() => setInput(input + '0')}>0</Button>
        </View>

      </View>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
    color: 'gray',
    marginBottom: 30,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

