// that returns an h1 with the text inside
// export default this component
// import and use it in index.js

// a rule for the entire semester
// always call your file the same as your component name.

// create a component
// that takes single prop called text
// let's obj destructuring
export default function Title({text}) {
  // we're going to return a single node of JSX
  // which is going to be here an h1
  return <h1>
    {text}
  </h1>
  // note that between the {} I'm using javascript
}