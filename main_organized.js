// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

// NOTE: I am working on body > wrapper > form > fields
let fields = document.getElementById("fields");

// NOTE:
// create HTML tag <label for ="id"> label </label>
// create HTML tag <input type="type" name="id" id="id" placeholder="">
// create HTML tag <label for ="id"> Comments?? </label>
// create HTML tag <textarea name ="id" id="id" placeholder="label">
// create HTML tag <label for = "id"> Languages ??</label>
// create HTML tag <select name="id" id="id" placeholder="">
// creat child of select <option value="value">label</option>
// append back to fields > label, fields > input
// avoid select and textarea forms

const array = formData;
const arraySize= array.length;

function createLabel(i){
  const label = document.createElement("label");
  label.setAttribute("for", array[i].id);
  return label;
}

function evaluateType(i){
  if (array[i].type === "select"){
    let inputType = "select";
    return inputType;
  } else if (array[i].type === "textarea"){
    let inputType = "textarea";
    return inputType;
  } else {
    let inputType = "input";
    return inputType;
  }

}

function createInput(i){
  if (array[i].type === "text"){
  let input = document.createElement(evaluateType(i));
  input.setAttribute("type", array[i].type);
  input.setAttribute("name", array[i].id);
  input.setAttribute("id", array[i].id);
  input.setAttribute("placeholder", array[i].label);
  return input;
} else {
    let input = document.createElement(evaluateType(i));
    input.setAttribute("name", array[i].id);
    input.setAttribute("id", array[i].id);
    input.setAttribute("placeholder", array[i].label);
    return input;
  }
}

function createSelectOption(i){
  for (let j = 0; j < array[i].options.length; j++){
    console.log("hi");
    let select_option = document.createElement("option");
    select_option.setAttribute("value", array[i].options[j].value);
    select_option.append(array[i].options[j].label);
    createInput(i).appendChild(select_option);
  }
  // return option;
}

for (let i = 0; i < arraySize; i++){
      createLabel(i);
      createInput(i);
      createSelectOption(i);

      fields.append(createLabel(i));
      fields.append(createInput(i));

    }


// // document.getElementsByTagName("input").style.boxSizing = "border-box";
// // document.getElementsByTagName("input").style.width = "600px";
// // document.getElementsByTagName("textarea").style.boxSizing = "border-box";
// // document.getElementsByTagName("textarea").style.width = "600px";
// // document.getElementsByTagName("select").style.boxSizing = "border-box";
// // document.getElementsByTagName("select").style.width = "600px";
//
// // NOTE: I want to find font awesome unicode based on font awesome label
