import { useState } from "react";

export const ParkingSlot = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [totalSlots, setTotalSlots] = useState(8);
  const [availableSlots, setAvailableSlots] = useState(8);

  function selectSlot(slot) {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== slot));
      setAvailableSlots(availableSlots + 1);
    } else {
      setSelectedSlots([...selectedSlots, slot]);
      setAvailableSlots(availableSlots - 1);
    }
  }

  return (
    <div>
      <h4>Task 2 Parking Slot</h4>
      <div>Available Parking Slots: {availableSlots}</div>
      <div>
        {[...Array(totalSlots)].map((x, i) => (
          <div
            key={i}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: selectedSlots.includes(i) ? "red" : "green",
              display: "inline-block",
            }}
            onClick={() => selectSlot(i)}
          />
        ))}
      </div>
    </div>
  );
};
