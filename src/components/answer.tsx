import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Buttons from './button';
import {AnswerObject} from '../screens/quiz';

interface Answers {
  useranswer: AnswerObject | undefined;
  answer: string[];
  setcorrectanswer: any;
  checkanswer: () => void;
}
// Compoenent shows the multiple options below the question to choose from the prop of the child class.
const Answers: FC<Answers> = ({
  useranswer,
  answer,
  setcorrectanswer,
  checkanswer,
}) => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 10, paddingHorizontal: 20}}>
        {answer &&
          answer.map((answer, key) => {
            return (
              <View key={answer}>
                <Buttons
                  {...{key, answer}}
                  correct={useranswer?.correctanswer === answer}
                  disabled={useranswer ? true : false}
                  onPress={() => {
                    (setcorrectanswer.current = answer), checkanswer();
                  }}
                />
              </View>
            );
          })}
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
  textstyle: {padding: 15, fontSize: 15, color: 'blue'},
});

export default Answers;
