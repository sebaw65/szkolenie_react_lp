import React from 'react';
import Comment from '../../atoms/Comment/Comment';
import PersonWithDescription from '../PersonWithDescription/PersonWithDescription';
import PropTypes from 'prop-types';

import styles from './CommentContainer.module.css';

const CommentContainer = ({ text, image, author, position }) => {
  return (
    <article className={styles.comentBox}>
      <Comment text={text} />
      <PersonWithDescription
        image={image}
        author={author}
        position={position}
      />
    </article>
  );
};

export default CommentContainer;

CommentContainer.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
