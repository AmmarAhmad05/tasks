import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <Form.Group controlId="options-dropdown">
                <Form.Label>Select Answer</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
