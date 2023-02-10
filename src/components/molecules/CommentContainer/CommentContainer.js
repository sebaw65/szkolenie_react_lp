import React from 'react';
import Comment from '../../atoms/Comment/Comment';
import PersonWithDescription from '../PersonWithDescription/PersonWithDescription';

import styles from './CommentContainer.module.css';

const CommentContainer = ({ text, image, author, position }) => {
  // console.log(image);
  return (
    <div className={styles.comentBox}>
      <Comment text={text} />
      <PersonWithDescription
        image={image}
        author={author}
        position={position}
      />
    </div>
  );
};

export default CommentContainer;
