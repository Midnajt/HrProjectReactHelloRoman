import React from 'react';
import { Wrapper, NewsSectionHeader, TitleWrapper, ArticleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
    image: 'https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_960_720.jpg',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="articleImage" /> : null}
          </ContentWrapper>
          <Button isBig>Click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
