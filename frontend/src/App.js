import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className='h-screen bg-blue'>
        <div className='w-2/5 mx-auto mt-10 mb-3'>
          <h1 className='text-5xl mb-3'> Test Tester </h1>
          <p className='text-2xl text-cyan-500 ml-2'> Art Maker Extraordinaire</p>
        </div>

        <div className='flex space-between w-2/4 m-auto py-10 border rounded-sm px-3 shadow'>
          <img alt='profile' className='rounded-full w-32 h-32 mx-8' src='./profile_picture.jpeg' />
          <div>
            <h5 className='text-2xl text-slate-800 border-b-2 border-slate-200'> "I'm Dirty Dan!"</h5>
            <p className='pt-3'> Famed for putting on a cowboy hat and exclaiming "I'm Dirty Dan",
               Tia Bo Bia Pia claims to have become cowboy alter ego 'Dirty Dan'.
            </p>
          </div>
        </div>
      </div>

      <div className='h-screen'>
        <div className='mb-5 mx-5'>
          <h1>Display Art</h1>
        </div>
      </div>
    </>
  );
}

export default App;
