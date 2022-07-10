import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import HeaderClass from './src/components/header';
import Quiz from './src/screens/quiz';

const App: FC = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <HeaderClass title="Quiz app"></HeaderClass>
      <Quiz />
    </SafeAreaView>
  );
};

export default App;
