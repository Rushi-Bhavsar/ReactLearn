import { CORE_CONCEPTS } from "./data"
import { CoreConcept } from "./components/CoreConcept"
import { Header } from "./components/Header/Header.jsx"
import { TabButton } from "./components/TabButton";

function App() {
  const handleEvent = (selectedButton) => {
    console.log(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => {handleEvent('components')}}>Components</TabButton>
            <TabButton onSelect={() => {handleEvent('jsx')}}>JSX</TabButton>
            <TabButton onSelect={() => {handleEvent('props')}}>Props</TabButton>
            <TabButton onSelect={() => {handleEvent('state')}}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
