// create a component that
// wraps children with a ul
// element
export default function ConceptList({ children }) {
  // remember that you can use the style property which is
  // an object that camelCases all css properties.
  return <ul style={{color: "green"}}>
    {children}
  </ul>
}
// once done import and use in
// index.js
