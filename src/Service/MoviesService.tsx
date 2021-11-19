import axios, { Canceler } from 'axios';
import { mock } from '../App/mock';
import { ServerResponse } from '../Types/serverType';

const CancelToken = axios.CancelToken;
let cancel: Canceler;

export const getMoviesData = async () => {
  try {
    //     const { data } = await axios.get<ServerResponse>(
    //       'https://api.themoviedb.org/3/tv/top_rated?api_key=7552925846ab0e142a1f61935b4d5885&language=en-US&page=1',
    //       {
    //         cancelToken: new CancelToken(c => {
    //           cancel = c;
    //         }),
    //       }
    //     );
    return mock;
  } catch (error) {
    cancel();
    throw error;
  }
};
