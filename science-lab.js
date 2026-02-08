/* Task 1: Compile Participant Details with Shorthand Property Names */
const name = "Kikunmi";
const age = 45;
const studyField = "product management";
const participant = { name, age, studyField };

/* Task 2: Implement a Shorthand Function for Participant Info */
const participantWithMethod = {
  ...participant,
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};
// Example usage:
// participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const participantWithArrow = {
  ...participant,
  displayInfo: () => {
    // Arrow functions do not have their own 'this', so this will not refer to the object
    console.log(`Name: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};
// Example usage:
// participantWithArrow.displayInfo();

/*
 * Observations:
 * Arrow functions do not have their own 'this' binding. In the above example, 'this' inside the arrow function does not refer to the participantWithArrow object, but rather to the enclosing scope (which is likely 'undefined' or the global object in non-strict mode). As a result, the properties will be 'undefined'.
 */

/* Task 4: Using Computed Property Names */
function updateParticipantInfo(obj, propName, value) {
  return {
    ...obj,
    [propName]: value
  };
}
// Example usage:
// const updated = updateParticipantInfo(participant, "age",