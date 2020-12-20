import React from 'react';

import { Tex } from 'react-tex';
import { InlineMath, BlockMath } from 'react-katex';
import QuizContainer from './Containers/Quiz.container';
import './App.css';
import question from './Fixtures/Question';

function App() {
  return (
    <div className="App">
      <QuizContainer {...question} />
      <Tex texContent={'3 + 4 = 6 \\text{  -- рендеринг за допомогою Tex}'}/>
      <BlockMath>{String.raw`\begin{Bmatrix}\text{кіт} & b \\c & d\end{Bmatrix} \text{-- рендеринг з KaTeX}`}</BlockMath>
    </div>
  );
}

export default App;
