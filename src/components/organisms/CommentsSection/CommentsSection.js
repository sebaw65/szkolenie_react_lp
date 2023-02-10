import React from 'react';
import CommentContainer from '../../molecules/CommentContainer/CommentContainer';
import image1 from '../../../images/profile-1.jpg';
import image2 from '../../../images/profile-2.jpg';
import image3 from '../../../images/profile-3.jpg';

import styles from './CommentsSection.module.css';

const CommentsSection = () => {
  const comments = [
    {
      text: 'Veniam anim minim sint sunt deserunt enim amet mollit elit dolor sit. Non exercitation ex eiusmod elit sint cupidatat. Officia amet eu aute non. Ut ullamco qui fugiat aute sit in aliquip laborum mollit cupidatat. Dolore sit duis nulla minim ex commodo pariatur enim nisi sint. Amet aliquip aliqua est adipisicing irure pariatur excepteur duis reprehenderit eu voluptate consectetur deserunt excepteur.',
      img: image1,
      author: 'Julian Tuwim',
      position: 'Pisarz',
    },
    {
      text: 'Veniam anim minim sint sunt deserunt enim amet mollit elit dolor sit. Non exercitation ex eiusmod elit sint cupidatat. Officia amet eu aute non. Ut ullamco qui fugiat aute sit in aliquip laborum mollit cupidatat. Dolore sit duis nulla minim ex commodo pariatur enim nisi sint. Amet aliquip aliqua est adipisicing irure pariatur excepteur duis reprehenderit eu voluptate consectetur deserunt excepteur.',
      img: image2,
      author: 'Fryderyk Chopin',
      position: 'Muzyk',
    },
    {
      text: 'Veniam anim minim sint sunt deserunt enim amet mollit elit dolor sit. Non exercitation ex eiusmod elit sint cupidatat. Officia amet eu aute non. Ut ullamco qui fugiat aute sit in aliquip laborum mollit cupidatat. Dolore sit duis nulla minim ex commodo pariatur enim nisi sint. Amet aliquip aliqua est adipisicing irure pariatur excepteur duis reprehenderit eu voluptate consectetur deserunt excepteur.',
      img: image3,
      author: 'Maria Skłodowska-Curie',
      position: 'Fizyczka, chemiczka',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {comments.map((el, id) => {
        return (
          <CommentContainer
            key={id}
            text={el.text}
            image={el.img}
            author={el.author}
            position={el.position}
          />
        );
      })}
    </div>
  );
};

export default CommentsSection;
