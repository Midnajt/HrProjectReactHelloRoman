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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam libero
          praesentium laborum, doloremque, optio reprehenderit porro consequuntur consequatur ea! Sunt eum quibusdam soluta vitae quisquam debitis
          cumque corporis consequatur rem provident, assumenda temporibus unde id, magni facere minus eos. Doloribus ea aut sapiente excepturi
        </p>
        <Button isBig>Click me</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
