import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        size="sm"
        variant="solid"
        customBg="red"
        customColor="indigo"
        loading
        loadingText="Saving..."
      >
        Submit
      </Button>
    </>
  );
}

export default App;
