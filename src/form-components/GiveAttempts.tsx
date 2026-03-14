import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");
    function changeRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="attemptRequest">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={changeRequested}
                />
            </Form.Group>
            <div>{attempts}</div>
            <Button
                onClick={() => {
                    if (!isNaN(parseInt(requested))) {
                        setAttempts(attempts + Number(requested));
                    }
                }}
            >
                gain
            </Button>
            <Button
                disabled={attempts <= 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                use
            </Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
