TASK: Card HTML elements are generated and then appended to the DOM. A strategy is required to allow those elements to be accessed after they've been generated.

SOLUTION: Directly Assign a custom property to the DOM element and cast it for typescript using the following strategy.

    const card = document.createElement("div") as HTMLElement & { metaData?: TPokemon};

    card.metaData = data;

    console.log(card.metaData?.isFaceUp);