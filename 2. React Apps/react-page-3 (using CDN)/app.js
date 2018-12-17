// This is JSX syntax:
const title = 'My first React element.';
const desc = 'I just learned how to create a React node.';
const name = 'Ryan';

const header = (
  <header>
    <h1>{name}'s first React element!'</h1>
    <p>{desc}</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('app')
);
