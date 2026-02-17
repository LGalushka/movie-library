import { Layout } from './container/layout/Layout';

function App() {
  const handlerSearch = (query: string) => {
    console.log('Поиск', query);
    //здесь будет API
  };
  return (
    <>
      <Layout onSearch={handlerSearch}>
        <h1 style={{ color: 'white' }}>Добро пожаловить!</h1>
        <p style={{ color: 'gray' }}>Здесь будут фильмы...</p>
      </Layout>
    </>
  );
}

export default App;
