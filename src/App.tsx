import { useNoSSR, NoSSR } from './nossr';

function App() {
  useNoSSR(() => {});

  return (
    <>
      <h1>🎉🎉🎉 Github Pages 🎉🎉🎉</h1>
      <NoSSR>aasdf</NoSSR>
    </>
  );
}

export default App;
