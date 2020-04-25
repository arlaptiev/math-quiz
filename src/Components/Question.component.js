import React from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown.component';

const _renderContent = (content) => (
  <Markdown source={content} />
);

const Question = ({ content }) => (
  <>
    {_renderContent(content)}
  </>
);

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
