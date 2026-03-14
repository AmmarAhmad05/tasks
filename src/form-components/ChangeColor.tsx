import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Black",
        "White",
    ];

    const [chosenColor, setChosenColor] = useState<string>(colors[0]);

    return (
        <div>
            {colors.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="color"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setChosenColor(event.target.value);
                    }}
                    id={color}
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
