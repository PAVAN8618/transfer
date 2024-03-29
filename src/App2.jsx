

import  { useState } from 'react';



const AnagramChecker = () => {
  const isAnagram = (str1, str2) => {
    const normalizeString = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);
  
    return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
  };
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [isAnagramResult, setIsAnagramResult] = useState(null);

  const handleCheckAnagram = () => {
    const result = isAnagram(input1, input2);
    setIsAnagramResult(result);
  };

  return (
    <div >
    

      <div >
        <input
          type="text"
          placeholder="Enter the first word or phrase"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="Enter the second word or phrase"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          
        />
        <button onClick={handleCheckAnagram} >
          Check Anagram
        </button>
      </div>

      {isAnagramResult !== null && (
        <p >
          {isAnagramResult ? 'The words/phrases are anagrams!' : 'The words/phrases are not anagrams.'}
        </p>
      )}
    </div>
  );
};

export default AnagramChecker;