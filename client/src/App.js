import './App.css';
import Header from './component/Header';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client} className="container">
     <Header />
     <div className='container'>
      <h1>hello world</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
