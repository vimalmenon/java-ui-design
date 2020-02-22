const reducerFunction  = (type, payload) => {
	return () => {
		return {
			type,
			payload
		}
	}
};
const reducer = (props) => (next) => (action) => {
		let {REDUCER, type, SPINNER, ...rest} = action;
		let returnedValue;
		if (REDUCER) {
			let reducer = props.dispatch(reducerFunction(type, rest));
			returnedValue = props.next(reducer);
		} else {
			returnedValue = props.next(action);
		}
		return returnedValue;
};

export default reducer;