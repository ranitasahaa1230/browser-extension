import React,{useEffect} from 'react'
import { useBrowser } from '../contexts';
import { quotes } from '../database';

export const Quotes = () => {
    const {
        browserState: { quotesOfTheDay }, browserDispatch
      } = useBrowser();

    useEffect(() => {
        const getQuotes = quotes[Math.floor(Math.random() * quotes.length)].quote;
        browserDispatch({
          type: "GETQUOTES",
          payload: getQuotes,
        });
        //eslint-disable-next-line
      }, []);

  return (
    <div className="md:text-xl font-medium">{quotesOfTheDay}</div>
  )
}