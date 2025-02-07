// Once done the above create a ConceptItem component.
// that takes a single prop called idea
export default function ConceptItem({idea}) {
  // remember to use the className prop
  // which is the same as the class in html
  return <li className="p-2">
    {idea}
  </li>
}