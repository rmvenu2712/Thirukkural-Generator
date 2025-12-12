import { useState } from 'react';
import userData from '/data'; // Assuming the JSON file is in the src directory
import { RiSearchEyeLine } from "react-icons/ri";
import { PiFlowerFill } from "react-icons/pi";
import { Header } from './Comp/Header';
import { Footer } from './Comp/Footer';
import Slider from './Comp/Slider';
import TranslateWidget from './TranslateWidget';



export const App = () => {
  const [inputId, setInputId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = userData.find((u) => u.id === parseInt(inputId)); // Find user by ID
    if (foundUser) {
      setUser(foundUser);
      setError(''); // Clear any error message
    } else {
      setUser(null);
      setError('Please check the Number');
    }
  };

  return (
      <div className='h-full'>
          <Header/>
          <div className=' w-full flex justify-center items-center my-7'>

              <div className=" bg-gradient-to-r from-center-cl via-main-cl to-center-cl shadow-3xl sm:w-5/6 w-full py-10 sm:px-10 px-0 h-auto rounded-2xl mx-3 sm:mx-0 ">
                  <h2 className='font-extrabold text-3xl pb-10 text-center'>திருக்குறள்</h2>
                  <form className='flex justify-center' onSubmit={handleSubmit}>
                    <input className='border-2 rounded-s-lg w-25 px-2 py-3' type="text" placeholder="Enter NO" value={inputId} onChange={(e) => setInputId(e.target.value)} /> 
                    <button className='border-2 rounded-e-lg px-2 py-3 bg-white' type="submit"><RiSearchEyeLine size={24}/></button>
                  <TranslateWidget/>
                
                  </form>

                  {error && <p style={{ color: 'red' }}>{error}</p>}


                  <div className='flex my-3 mx-1'>
                  
                    <div className='font-bold underline flex'><PiFlowerFill className='me-1 mt-1.5'/>குறள் எண் :</div> 
                    <div className='ms-2'> {user && ( <p className='font-bold'>{user.id}</p> )}</div> 
                  </div>

                  <div className=''>
                    <div className='flex'>

                      <div className='font-bold mx-1 underline flex'><PiFlowerFill className='me-1 mt-1.5'/> குறள் : </div>

                    </div>
                  
                    <div className='h-12 my-3 ms-1'>
                      <p className='h-12 sm:text-base text-xs font-bold ms-1 md:ms-20'>
                        {user && ( <p>{user.Line1}<br/>{user.Line2}</p> )}
                      </p>
                    </div> 
                  </div>

                  <div className=''>
                    <div className='font-bold mx-1 underline flex'><PiFlowerFill className='me-1 mt-1.5'/>விளாகம் :</div> 
                      <div className='my-3 ms-1 md:ms-20 '>
                        <p className='h-16 sm:text-base text-xs font-bold'>
                          {user && ( <p>{user.mv}</p> )}
                        </p>
                      </div> 
                  </div>
              </div>

          </div>
          <Slider/>
          <Footer/>
      </div>
       
  );
}

export default App;
