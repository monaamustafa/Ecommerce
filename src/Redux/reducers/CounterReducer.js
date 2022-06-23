export default function CounterReducer(state = { count: 0 }, action) {
  if (action.type === "INCREASE") return { count: state.count + 1 };
  if (action.type === "DECREASE") {
    if (state.count > 0) return { count: state.count - 1 };
  }
  return state;
}
