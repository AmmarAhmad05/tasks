import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "Christmas"
    | "Halloween"
    | "NewYears"
    | "Thanksgiving"
    | "Valentines";

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    NewYears: "🎆",
    Thanksgiving: "🦃",
    Valentines: "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");
    function advanceAlphabetical(): void {
        if (holiday === "Christmas") setHoliday("Halloween");
        if (holiday === "Halloween") setHoliday("NewYears");
        if (holiday === "NewYears") setHoliday("Thanksgiving");
        if (holiday === "Thanksgiving") setHoliday("Valentines");
        if (holiday === "Valentines") setHoliday("Christmas");
    }

    function advanceChronological(): void {
        if (holiday === "NewYears") setHoliday("Valentines");
        if (holiday === "Valentines") setHoliday("Halloween");
        if (holiday === "Halloween") setHoliday("Thanksgiving");
        if (holiday === "Thanksgiving") setHoliday("Christmas");
        if (holiday === "Christmas") setHoliday("NewYears");
    }
    return (
        <div>
            <div>Holiday: {holidayEmojis[holiday]}</div>
            <Button onClick={advanceAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={advanceChronological}>Advance by Year</Button>
        </div>
    );
}
