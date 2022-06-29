import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, TitleWrapper, ArticleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '25a5e6035428fef4fcc8217e318f75';

// const data = [
//   {
//     title: 'New computers at school',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
//   },
//   {
//     title: 'New computers at school2',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
//     image: 'https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_960_720.jpg',
//   },
//   {
//     title: 'New computers at school3',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum similique amet earum. Error vel quisquam liberopraesentium laborum',
//     image: 'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg',
//   },
// ];

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
          allArticles {
            title
            category
            content
            image {
              url
            }
          }
        }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image.url} alt="articleImage" /> : null}
          </ContentWrapper>
          <Button isBig>Click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
