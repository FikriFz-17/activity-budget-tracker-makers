import { createStore } from "redux";

interface Activity {
  id: number;
  title: string;
  pengeluaran: number;
}

interface State {
  items: Activity[];
  saldo: number;
}

const initialState: State = {
  items: [],
  saldo: 100000,
};

interface Action {
  type: string;
  payload: Activity;
}

// reducer
const activityReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return {
        ...state,
        items: [...state.items, action.payload],
        saldo: state.saldo - action.payload.pengeluaran,
      };
    default:
      return state;
  }
};

// store
const store = createStore(activityReducer);

// subscribe
store.subscribe(() => {
  console.log("Perubahan Data:", store.getState());
});

console.log("Initial state:", store.getState());

// dispatch
store.dispatch({
  type: "ADD_ACTIVITY",
  payload: { id: 1, title: "Beli Kopi", pengeluaran: 20000 },
});

store.dispatch({
  type: "ADD_ACTIVITY",
  payload: { id: 2, title: "Bayar Listrik", pengeluaran: 50000 },
});
