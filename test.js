const data = [
  {
    type: "part",
    number: "CP0LITM0001335",
    name: "CP0LITM0001335",
    repeater: [
      {
        type: "Anethesia",
        unitOfPrice: "Units",
        enteredQty: 0,
        receivingIn: [{
            "id": "hjj",
            "label": "kjk"
        }],
      },
  
    ],
  },
  {
    type: "part",
    number: "CP0LITM0001345",
    name: "CP0LITM0001345",
    repeater: [
      {
        type: "MRI",
        unitOfPrice: "",
        enteredQty: 1,
        receivingIn: [{
            id:"kjsd",
            label: "khk"
        }],
      },
     
    ],
  },
];

function checkRecevingIn(partsArray) {
  let foundValidPart = false;
  let seenEmptyOnlyPart = false;

  for (const part of partsArray) {
    // skip parts without repeaters
    if (!part.repeater || !Array.isArray(part.repeater) || part.repeater.length === 0) {
      continue;
    }

    let partHasAnyValidRepeater = false;
    let partHasAnyEmptyRepeater = false;

    for (const repeaterEntry of part.repeater) {
      const receivingInList = repeaterEntry && repeaterEntry.receivingIn;
      const hasReceiving = Array.isArray(receivingInList) && receivingInList.length > 0;

      // normalize enteredQty to number
      let qty = 0;
      if (repeaterEntry && repeaterEntry.enteredQty != null) {
        qty = Number(repeaterEntry.enteredQty);
        if (isNaN(qty)) qty = 0;
      }

      // if no receiving but qty > 0 => invalid
      if (!hasReceiving) {
        if (qty > 0) return false;
        partHasAnyEmptyRepeater = true;
        continue;
      }

      // validate each receivingIn item's id
      for (const recv of receivingInList) {
        const id = recv && recv.id;
        if (id == null) return false;
        const idStr = String(id).trim();
        if (idStr === "" || idStr.toLowerCase() === "null") return false;
      }

      partHasAnyValidRepeater = true;
    } // end repeaters loop

    // mixed (valid + empty) within same part -> invalid
    if (partHasAnyValidRepeater && partHasAnyEmptyRepeater) {
      return false;
    }

    if (partHasAnyValidRepeater) {
      foundValidPart = true;
    } else if (partHasAnyEmptyRepeater) {
      seenEmptyOnlyPart = true;
    }
  } // end parts loop

  // true if we found at least one valid-only part, or if all parts were empty-only
  return foundValidPart || seenEmptyOnlyPart;
}






console.log(checkRecevingIn(data));
