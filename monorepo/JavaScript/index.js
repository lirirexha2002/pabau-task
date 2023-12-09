document.addEventListener("DOMContentLoaded", function () {
  // Initial array of objects representing checkboxes
  let myArray = [
    { title: "Internship", checked: false },
    { title: "Pabau", checked: false },
    { title: "Employment", checked: false },
    { title: "Career", checked: false },
  ];

  // References to the buttons in the HTML
  const shuffleBtn = document.getElementById("shuffleBtn");
  const changeBtn = document.getElementById("changeBtn");
  const showSelectedBtn = document.getElementById("showSelectedBtn");

  shuffleBtn.addEventListener("click", shuffleValues);
  changeBtn.addEventListener("click", changeValues);
  showSelectedBtn.addEventListener("click", showSelectedValues);

  // Initial rendering of checkboxes
  renderCheckboxes(myArray);

  // Function to render checkboxes based on the provided array
  function renderCheckboxes(arr) {
    const checkboxContainer = document.getElementById("checkboxContainer");

    // Clear the existing checkboxes before rendering
    while (checkboxContainer.firstChild) {
      checkboxContainer.removeChild(checkboxContainer.firstChild);
    }

    // Creating checkboxes dynamically
    arr.forEach((item) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = item.title.toLowerCase();
      checkbox.checked = item.checked;

      const label = document.createElement("label");
      label.htmlFor = item.title.toLowerCase();
      label.appendChild(document.createTextNode(item.title));

      const br = document.createElement("br");

      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(label);
      checkboxContainer.appendChild(br);

      checkbox.addEventListener("change", function () {
        item.checked = checkbox.checked;
      });
    });
  }

  // Function to shuffle the values in the array
  function shuffleValues() {
    let newArr = [...myArray];
    for (let i = myArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    renderCheckboxes(newArr);
    myArray = [...newArr];
  }

  // Function to show selected values in an alert
  function showSelectedValues() {
    let selectedCheckboxes = myArray.filter((item) => item.checked);
    let selectedValues = selectedCheckboxes.map((item) => item.title);

    selectedValues.length > 0
      ? alert(`Selected Values: ${selectedValues.join(", ")}`)
      : alert("No selected values");
  }

  // Function to change the values of checkboxes based on user input
  function changeValues() {
    const newName1 = prompt("Enter the first value; if left empty, no changes will be made.");
    const newName2 = prompt("Enter the second value; if left empty, no changes will be made.");
    const newName3 = prompt("Enter the third value; if left empty, no changes will be made.");
    const newName4 = prompt("Enter the fourth value; if left empty, no changes will be made.");

    newName1 && (myArray[0].title = newName1);
    newName2 && (myArray[1].title = newName2);
    newName3 && (myArray[2].title = newName3);
    newName4 && (myArray[3].title = newName4);

    renderCheckboxes(myArray);
  }
});
