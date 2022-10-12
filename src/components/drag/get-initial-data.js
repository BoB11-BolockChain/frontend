let uniqueId = 0;
function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const id = uniqueId++;
    return {
      id: `Branching:${id}`,
      text: `Ability ${id}`,
    };
  });
}

const initial = {
  columns: {
    "Branching-1": {
      id: "Branching-1",
      title: "Branching-1",
      items: getItems(2),
    },
    "Branching-2": {
      id: "Branching-2",
      title: "Branching-2",
      items: getItems(2),
    },
    "Branching-3": {
      id: "Branching-3",
      title: "Branching-3",
      items: getItems(2),
    },
    "Branching-4": {
      id: "Branching-4",
      title: "Branching-4",
      items: getItems(2),
    },
    "Branching-5": {
      id: "Branching-5",
      title: "Branching-5",
      items: getItems(2),
    },
    "Branching-6": {
      id: "Branching-6",
      title: "Branching-6",
      items: getItems(2),
    },
  },
  columnOrder: [
    "Branching-1",
    "Branching-2",
    "Branching-3",
    "Branching-4",
    "Branching-5",
    "Branching-6",
  ],
};

export default function getInitialData() {
  return initial;
}
