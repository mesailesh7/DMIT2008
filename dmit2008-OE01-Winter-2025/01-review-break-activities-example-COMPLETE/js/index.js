/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let topicList = document.querySelector(".topics-list")

let newTopicForm = document.querySelector(".new-topic-form")

// create function called add topic to page.
const addTopicToPage = (value) => {
  topicList.innerHTML += `<li class="list-group-item">
      ${value}
  </li>`
}

newTopicForm.addEventListener("submit", (event)=> {
  event.preventDefault()
  // use form.elements using the name of the input
  const topicInput = newTopicForm.elements["new-topic"]
  // the value
  const topicValue = topicInput.value

  // validation
  if (topicValue === "") {
    // invalid
    // adding a class on the element in the html.
    topicInput.classList.add("is-invalid")
    return // so nothing below this will be executed
  }
  // if the code continues here it means that it's valid.
  topicInput.classList.remove("is-invalid")
  // we're going to create a function that will
  // add this topic to the group.
  addTopicToPage(topicValue)
  // reset the form
  newTopicForm.reset()
})
