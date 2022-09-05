import React, { useContext } from "react";
import Letter from "./Letter";
import { AppContext } from "../App";

function Board() {
  const { wordLength } = useContext(AppContext);
  return (
    <div className='board'>
      <div className='row'>
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={0} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={0} />,
          <Letter letterPos={6} attemptVal={0} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={0} />,
          <Letter letterPos={6} attemptVal={0} />,
          <Letter letterPos={7} attemptVal={0} />,
        ]}
      </div>
      <div className='row'>
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={1} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={1} />,
          <Letter letterPos={6} attemptVal={1} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={1} />,
          <Letter letterPos={6} attemptVal={1} />,
          <Letter letterPos={7} attemptVal={1} />,
        ]}
      </div>
      <div className='row'>
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={2} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={2} />,
          <Letter letterPos={6} attemptVal={2} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={2} />,
          <Letter letterPos={6} attemptVal={2} />,
          <Letter letterPos={7} attemptVal={2} />,
        ]}
      </div>
      <div className='row'>
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={3} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={3} />,
          <Letter letterPos={6} attemptVal={3} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={3} />,
          <Letter letterPos={6} attemptVal={3} />,
          <Letter letterPos={7} attemptVal={3} />,
        ]}
      </div>
      <div className='row'>
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={4} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={4} />,
          <Letter letterPos={6} attemptVal={4} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={4} />,
          <Letter letterPos={6} attemptVal={4} />,
          <Letter letterPos={7} attemptVal={4} />,
        ]}
      </div>
      <div className='row'>
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
        {wordLength === 6 && <Letter letterPos={5} attemptVal={5} />}
        {wordLength === 7 && [
          <Letter letterPos={5} attemptVal={5} />,
          <Letter letterPos={6} attemptVal={5} />,
        ]}
        {wordLength === 8 && [
          <Letter letterPos={5} attemptVal={5} />,
          <Letter letterPos={6} attemptVal={5} />,
          <Letter letterPos={7} attemptVal={5} />,
        ]}
      </div>
    </div>
  );
}

export default Board;
