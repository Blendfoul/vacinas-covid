import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import BreadCrumbs from "./BreadCrumbs";
import {AxiosRequestConfig} from "axios";
import {Article} from "../types/News";
import ArticleComponent from './ArticleComponent';
import useAxios from "../hooks/useAxios";

const Home: React.FC<any> = () => {
  const {response} = useAxios('https://newsapi.org/v2/top-headlines', {
    headers: {
      'X-Api-Key': '7cba5fb16ae8462c90e6b576440f72c3'
    },
    params: {
      country: 'pt',
      q: 'covid 19'
    },
    method: 'get'
  } as AxiosRequestConfig);

  return (
    <Container>
      <BreadCrumbs primary={"Página Inicial"} />
      <Box my={2}>
        <Grid container direction={'row'} justify={'center'} spacing={2}>
          {
            response && response.data.articles.map((article: Article) => <ArticleComponent data={article} key={`news-${article.title}`}/>)
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
