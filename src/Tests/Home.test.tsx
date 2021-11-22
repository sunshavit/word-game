import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Components/Home';
import MockStoreWrapper, { mockState } from './MockStoreWrapper';
import userEvent from '@testing-library/user-event';
import * as MoviesService from '../Store/Api/MoviesApi';

const response = {
  page: 1,
  results: [
    {
      poster_path: '/boh1E1atURBdHXjboTnWOKIfWKb.jpg',
      popularity: 1.369815,
      id: 3579,
      backdrop_path: '/2GWeOe5dhM3BtK94FZ2vjXACvam.jpg',
      vote_average: 7.73,
      overview:
        "The Angry Beavers is an American animated television series created by Mitch Schauer for the Nickelodeon channel. The series revolves around Daggett and Norbert Beaver, two young beaver brothers who have left their home to become bachelors in the forest near the fictional Wayouttatown, Oregon. The show premiered in the United States on April 19, 1997. The show started airing on the Nickelodeon Canada channel when it launched on November 2, 2009. The series aired on The '90s Are All That block on TeenNick in the US on October 7, 2011 as part of the block's U Pick with Stick line-up. The series was also up for a U Pick with Stick showdown on The '90s Are All That for the weekend of February 3, 2012, but lost to Rocko's Modern Life and did not air. The series was added to the Sunday line-up on The '90s Are All That on TeenNick, and aired from February 10, 2013, to March 3, 2013. The series returned to The '90s Are All That on TeenNick on March 25, 2013, but has since left the line-up again. The series is also currently being released on DVD.",
      first_air_date: '1997-04-20',
      origin_country: ['US'],
      genre_ids: [16, 35, 10751],
      original_language: 'en',
      vote_count: 11,
      name: 'The Angry Beavers',
      original_name: 'The Angry Beavers',
    },
    {
      poster_path: '/sskPK2HjkFaxam10eg0Hk1A3I2m.jpg',
      popularity: 6.055152,
      id: 60622,
      backdrop_path: '/qq1S5EjaaUrQAcMsn6raNFXpzHk.jpg',
      vote_average: 7.72,
      overview:
        'A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.',
      first_air_date: '2014-04-15',
      origin_country: ['US'],
      genre_ids: [80, 18, 53],
      original_language: 'en',
      vote_count: 118,
      name: 'Fargo',
      original_name: 'Fargo',
    },
  ],
  total_results: 747,
  total_pages: 38,
};

test('check home render with mock service response and the buttons work correct', () => {
  const mockApi: any = jest.spyOn(MoviesService, 'useGetMoviesQuery');
  mockApi.mockReturnValueOnce(() => {
    response;
  });
  const { container } = render(
    <MockStoreWrapper mockState={mockState}>
      <Home />
    </MockStoreWrapper>
  );
  const title = screen.getByText('Guess What?');
  expect(title).toBeInTheDocument();
  const svgsButton = container.querySelectorAll('svg');
  expect(svgsButton).toHaveLength(6);
  const image = container.querySelector('img');
  expect(image).toHaveStyle({ filter: `blur(7px)` });
  svgsButton.forEach(svg => {
    userEvent.click(svg);
  });
  expect(image).toHaveStyle({ filter: `blur(6px)` });
});

test('data is pending and show loader', () => {
  const { container } = render(
    <MockStoreWrapper mockState={mockState}>
      <Home />
    </MockStoreWrapper>
  );
  const title = screen.queryByText('Guess What?');
  expect(title).not.toBeInTheDocument();
});
