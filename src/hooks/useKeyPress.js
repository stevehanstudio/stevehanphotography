// Source https://medium.com/better-programming/create-a-typing-game-with-react-hooks-usekeypress-and-faker-28bbc7919820
// Modified downHandler because original checks that key length is equal to one,
// and ArrowLeft and ArrowRight are 9 and 10 charazters long.
 
import { useState, useEffect } from 'react';

const useKeyPress = callback => {
   const [keyPressed, setKeyPressed] = useState();

   useEffect(() => {
      const downHandler = ({ key }) => {
         if (keyPressed !== key) {
            setKeyPressed(key);
            callback && callback(key);
         }
      };

      const upHandler = () => {
         setKeyPressed(null);
      };

      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      return () => {
         window.removeEventListener('keydown', downHandler);
         window.removeEventListener('keyup', upHandler);
      };
   });
   return keyPressed;
};

export default useKeyPress;