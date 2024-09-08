import React from "react";

const PersonForm = ({ onSubmitForm, newPerson, setNewPerson }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        Name:{" "}
        <input
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
        />
      </div>
      <div>
        Phone Number:{" "}
        <input
          value={newPerson.number}
          onChange={(e) =>
            setNewPerson({ ...newPerson, number: e.target.value })
          }
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
