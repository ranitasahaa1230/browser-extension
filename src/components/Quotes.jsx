import React,{useEffect, useState} from 'react'
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
    <div className="text-xl font-semibold">{quotesOfTheDay}</div>
  )
}
