import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="answerForm">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>
                <h3>{answer === expectedAnswer ? "✔️" : "❌"}</h3>
            </div>
        </div>
    );
}
