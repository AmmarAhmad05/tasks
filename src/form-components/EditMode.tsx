import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Enable Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode && (
                <div>
                    <Form.Group controlId="name-form">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            )}
            {!editMode && (
                <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
