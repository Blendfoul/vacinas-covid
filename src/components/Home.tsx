import React, {useCallback, useEffect, useState} from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import axios, {AxiosRequestConfig} from "axios";
import {Article, News} from "../types/News";
import ArticleComponent from './ArticleComponent';

type newsState = Article[] | null;

const Home: React.FC<any> = () => {
  const [newsData, setNewsData] = useState(null as newsState);

  const fetchNews = useCallback(async () => {
    const source = axios.CancelToken.source();

    const options: AxiosRequestConfig = {
      url: 'https://newsapi.org/v2/top-headlines',
      headers: {
        'X-Api-Key': '7cba5fb16ae8462c90e6b576440f72c3'
      },
      params: {
        country: 'pt',
        q: 'covid 19'
      },
      method: 'get',
      cancelToken: source.token
    };

    try {
      const response = await axios(options);

      const news: News = response.data;

      if (news.status === 'ok') {
        setNewsData(news.articles);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <Container>
      <BreadCrumbs primary={"Página Inicial"} />
      <Box my={2}>
        <Grid container direction={'row'} justify={'center'} spacing={2}>
          {
            newsData !== null && newsData.map(article => <ArticleComponent data={article} key={`news-${article.title}`}/>)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
