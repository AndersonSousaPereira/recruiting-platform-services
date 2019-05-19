export const showModal = () => ({
	type: "SHOW_MODAL"
})

export const hideModal = () => ({
	type: "HIDE_MODAL"
})

export const changeProdutoStatus = (index) => ({
	type: "CHANGE_PRODUTO_STATUS",
	index:index
})

export const changePedidoStatus = (index, index2) => ({
	type: "CHANGE_PEDIDO_STATUS",
	index:index,
	index2:index2
})


