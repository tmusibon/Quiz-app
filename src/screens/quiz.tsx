import React, {FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getquestions, Question} from '../utils/api';
import Questions from '../components/questions';
import Answers from '../components/answer';
import {Icon} from 'react-native-elements';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctanswer: string;
};

const Quiz: FC = props => {
  const [loader, setloader] = useState(false);
  const [question, setquestion] = useState<Question[]>([]);
  const [useranswers, setuseranswers] = useState<AnswerObject>([]);
  const [score, setscore] = useState(0);
  const [number, setnumber] = useState(0);
  const [totalquestion] = useState(10);
  const [gameover, setgameover] = useState(true);
  const setcorrectanswer = useRef(null);
  const [correct, setcorrect] = useState('');

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = async () => {
    setnumber(0);
    setloader(true);
    setgameover(false);
    const newquestions = await getquestions();
    console.log(newquestions);
    setquestion(newquestions);
    setscore(0);
    setuseranswers([]);
    setloader(false);
  };

  const nextQuestion = () => {
    const nextq = number + 1;
    if (nextq === totalquestion) {
      setgameover(true);
    } else {
      setnumber(nextq);
    }
  };

  const checkanswer = () => {
    if (!gameover) {
      const answer = setcorrectanswer.current;
      const correct = question[number].correct_answer === answer;
      if (correct) setscore(prev => prev + 1);

      const answerobject = {
        question: question[number].question,
        answer,
        correct,
        correctanswer: question[number].correct_answer,
      };

      setuseranswers(prev => [...prev, answerobject]);
      setTimeout(() => {
        ``;
        nextQuestion();
      }, 1000);
    }
  };
  return (
    <View style={{flex: 1}}>
      {!loader ? (
        <>
          <View style={styles.container}>
            <Text style={styles.textstyle}>
              <Questions questionNo={0} question={''} />
            </Text>
            <Text style={styles.textstyle}>
              {' '}
              {number + 1} / {totalquestion}
            </Text>
          </View>
          <View style={{marginLeft: 20}}>
            {' '}
            <Text style={styles.textstyle}> Score: {score}</Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Quiz;
