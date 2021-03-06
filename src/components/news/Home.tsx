import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import BreadCrumbs from "../utils/BreadCrumbs";
import {AxiosRequestConfig} from "axios";
import {Article} from "../../types/News";
import ArticleComponent from './ArticleComponent';
import useAxios from "../../hooks/useAxios";
import LoadingPage from "../utils/LoadingPage";
import ErrorPage from "../utils/ErrorPage";

const Home: React.FC<any> = () => {
  const {response, loading, error} = useAxios('https://newsapi.org/v2/top-headlines/', {
    headers: {
      'X-Api-Key': '7cba5fb16ae8462c90e6b576440f72c3'
    },
    params: {
      country: 'pt',
      q: 'covid 19'
    },
    method: 'get'
  } as AxiosRequestConfig);

  if(loading) {
    return <LoadingPage data={'A ler notícias importantes!'}/>;
  }

  if(error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Container>
      <BreadCrumbs primary={"Vacinas Covid"} />
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
