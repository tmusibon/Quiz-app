import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface Question {
  questionNo: number;
  question: string;
}

const Questions: FC<Question> = ({questionNo, question}) => {
  return (
    <SafeAreaView>
      <View style={styles.questioncontainer}>
        <Text style={styles.textstyle}>{questionNo}</Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            textAlign: 'left',
            marginLeft: 7,
          }}>
          {question}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questioncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingRight: 16,
  },
  textstyle: {
    padding: 15,
    fontSize: 15,
    color: 'blue',
  },
});

export default Questions;
