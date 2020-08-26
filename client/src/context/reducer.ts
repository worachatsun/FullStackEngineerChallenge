export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
