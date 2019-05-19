const setProdutos = (state = {produtos:[
				{produto:"Café Duplo", tempo:45, image:require('../img/cafe-duplo.png'), status:false,complementos:[
					{produto:"Açucar refinado", tempo:5, image:require('../img/acucar.png'), status:false},
					{produto:"Leite desnatado", tempo:20, image:require('../img/leite.png'), status:false},
					{produto:"Chantilly", tempo:20, image:require('../img/chantilly.png'), status:false},
					{produto:"Cupcake", tempo:5, image:require('../img/cupcake.png'), status:false},
					{produto:"Cookie", tempo:20, image:require('../img/cookie.png'), status:false}
				]},
				{produto:"Café expresso", tempo:45, image:require('../img/coffee.png'), status:false,complementos:[
					{produto:"Açucar refinado", tempo:5, image:require('../img/acucar.png'), status:false},
					{produto:"Leite desnatado", tempo:20, image:require('../img/leite.png'), status:false},
					{produto:"Chantilly", tempo:20, image:require('../img/chantilly.png'), status:false},
					{produto:"Cupcake", tempo:5, image:require('../img/cupcake.png'), status:false},
					{produto:"Cookie", tempo:20, image:require('../img/cookie.png'), status:false}
				]},
				{produto:"Mocha", tempo:150, image:require('../img/mocha.png'), status:false,complementos:[
					{produto:"Açucar refinado", tempo:5, image:require('../img/acucar.png'), status:false},
					{produto:"Leite desnatado", tempo:20, image:require('../img/leite.png'), status:false},
					{produto:"Chantilly", tempo:20, image:require('../img/chantilly.png'), status:false},
					{produto:"Cupcake", tempo:5, image:require('../img/cupcake.png'), status:false},
					{produto:"Cookie", tempo:20, image:require('../img/cookie.png'), status:false}
				]},
				{produto:"Americano", tempo:150, image:require('../img/cafe-americano.png'), status:false,complementos:[
					{produto:"Açucar refinado", tempo:5, image:require('../img/acucar.png'), status:false},
					{produto:"Leite desnatado", tempo:20, image:require('../img/leite.png'), status:false},
					{produto:"Chantilly", tempo:20, image:require('../img/chantilly.png'), status:false},
					{produto:"Cupcake", tempo:5, image:require('../img/cupcake.png'), status:false},
					{produto:"Cookie", tempo:20, image:require('../img/cookie.png'), status:false}
				]},
				{produto:"Cappuccino", tempo:150, image:require('../img/cappuccino.png'), status:false,complementos:[
					{produto:"Açucar refinado", tempo:5, image:require('../img/acucar.png'), status:false},
					{produto:"Leite desnatado", tempo:20, image:require('../img/leite.png'), status:false},
					{produto:"Chantilly", tempo:20, image:require('../img/chantilly.png'), status:false},
					{produto:"Cupcake", tempo:5, image:require('../img/cupcake.png'), status:false},
					{produto:"Cookie", tempo:20, image:require('../img/cookie.png'), status:false}
				]}
			], pedido:[]}, action) =>{
	switch(action.type){
		case "CHANGE_PRODUTO_STATUS":
			var aux = Object.assign({},state);

			aux.produtos[action.index].status = !aux.produtos[action.index].status;
			if(aux.produtos[action.index].status){
				aux.pedido.push(aux.produtos[action.index])
			}else{
				var index = aux.pedido.indexOf(aux.produtos[action.index]);
				aux.pedido.splice(index,1);
			}
			return aux;
		case "CHANGE_PEDIDO_STATUS":
			var aux = Object.assign({},state);

			if(aux.pedido[action.index].complementos[action.index2].status){
				aux.pedido[action.index].complementos[action.index2].status = false;
				aux.pedido[action.index].tempo -= aux.pedido[action.index].complementos[action.index2].tempo;
			}else{
				aux.pedido[action.index].complementos[action.index2].status = true;
				aux.pedido[action.index].tempo += aux.pedido[action.index].complementos[action.index2].tempo;
			}
			return aux;
		default:
			return state;
	}
}

export default setProdutos;
