import React from 'react';
import { Wrapper, TitleWrapper, ArticleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <Wrapper>
      <h2>University news feed</h2>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>Lorem ipsum</h3>
          <p>dTech news</p>
        </TitleWrapper>
        <Button>Click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
