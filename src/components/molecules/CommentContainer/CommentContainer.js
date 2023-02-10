import React from 'react';
import Comment from '../../atoms/Comment/Comment';
import RoundedImage from '../../atoms/RoundedImage/RoundedImage';

import styles from './CommentContainer.module.css';

const CommentContainer = ({ text, image, author, position = '' }) => {
  // console.log(image);
  return (
    <div className={styles.comentBox}>
      <Comment text={text} />
      <RoundedImage image={image} alt={author} />
    </div>
  );
};

export default CommentContainer;
