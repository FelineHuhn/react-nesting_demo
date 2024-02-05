import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={<p>very nice dog</p>} />
      <Animal
        emoji="🐈"
        name="Felix"
        description={
          <>
            <h3>Best cat ever</h3>
            <p>She is sweet, but shy</p>
          </>
        }
      />
      <Animal emoji="🐢" name="Archibald" />
      <Animal emoji="🐣" name="Chick Norris" />
    </main>
  );
}

function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      <section>{description}</section>
      <Button>{name} adoptieren</Button>
    </>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
