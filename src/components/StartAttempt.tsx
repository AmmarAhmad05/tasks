import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function addAttempt(): void {
        setAttempt(attempt + 1);
    }
    function subtractAttempt(): void {
        setAttempt(attempt - 1);
    }
    function changeProgress(): void {
        setInProgress(!inProgress);
    }

    return (
        <div>
            <div>{attempt}</div>
            <Button
                disabled={inProgress || attempt <= 0}
                onClick={() => {
                    subtractAttempt();
                    changeProgress();
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={changeProgress}>
                Stop Quiz
            </Button>
            <Button disabled={inProgress} onClick={addAttempt}>
                Mulligan
            </Button>
        </div>
    );
}
