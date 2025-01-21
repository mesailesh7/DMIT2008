/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let topicList = document.querySelector(".topics-list")

let newTopicForm = document.querySelector(".new-topic-form")

//create the function that dynamically adds elements to the list
const addTopicToPage = (value) => {
    topicList.innerHTML += `<li class="list-group-item">${value}</li>`
}

newTopicForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //grab the input value from from.elements
    const topicInput = newTopicForm.elements["new-topic"]
    //then, get the text value from the new topicInput object
    const topicValue = topicInput.value.trim()
    //validation
    if(topicValue === "") {
        // if it's blank, we're deeming that invalid input
        //add an invalid styling class on the input element
        topicInput.classList.add("is-invalid")
        // a blank return means return none/null
        return
    }
    // if we've made it past this point, the input's valid
    topicInput.classList.remove("is-invalid")

    //add value to the list
    addTopicToPage(topicValue)
    console.log(topicValue)
    //reset the form
    newTopicForm.reset()


})