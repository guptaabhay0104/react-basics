import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //callback hook is used to memoize or remember the below function definition for the following dependencies
  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str+= '0123456789';

    if(charAllowed) str+='{})(~!@#$%^&*';

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }


    setPassword(pass);
   
1   }, [length, numbersAllowed, charAllowed, setPassword])

const copyPwdToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 101);

  window.navigator.clipboard.writeText(password);  //to paste copied password to the clipboard
}, [password])

// useeffect hook is used to call the password generator function whenever any of the following dependencies is updated
useEffect(() => {
  passwordGenerator();
}, [length, numbersAllowed, charAllowed, passwordGenerator])

// useRef hook is used to take the reference of any element
const passwordRef = useRef(null) //null is the default value

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>

     <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-10'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly 
          ref={passwordRef}/>
          
        <button className='text-white bg-blue-800 p-3 outline-none px-3 py-0.5 shrink-0' 
        onClick={copyPwdToClipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}/>
          <label>Length: {length}</label>
        </div>

        <div className='flex text-sm gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {numbersAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}/>

          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex text-sm gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}/>

          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>

    </>
  )
}

export default App
