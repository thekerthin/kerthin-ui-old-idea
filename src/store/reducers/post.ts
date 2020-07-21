const initialState: any[] = [
  {
    title: "Title post 1",
    description: "Description post 2",
    createdAt: new Date().toString(),
  },
  {
    title: "Title post 2",
    description: "Description post 2",
    createdAt: new Date().toString(),
  },
];

// TODO: improve this
type Action = { type: string; payload: any };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
