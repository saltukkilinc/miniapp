import Header from '../../components/header';
import Layout from '../../components/layout';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function Home() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.name);

  return (
    <Layout>
      <h1 className='text-center my-3'>{name}</h1>
      <button
        onClick={() => dispatch.auth.setName(name === 'saltuk' ? 'osman' : 'saltuk')}
        className='mx-auto block rounded-lg border border-red-500 p-4 hover:border-none hover:bg-green-400 hover:text-white'
      >
        Change Name
      </button>
    </Layout>
  );
}

export default Home;
