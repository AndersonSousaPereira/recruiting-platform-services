const changeModal = (state = {status:false}, action) =>{
	switch(action.type){
		case "SHOW_MODAL":
			return {status:true};
		case "HIDE_MODAL":
			return {status:false};
		default:
			return state;
	}
}

export default changeModal;
