import GatewayExterno from "./GatewayExterno";

class PagamentoAdapter{
    
    constructor(){
        this.gateway_externo = new GatewayExterno
    }

    pagar(valor){
        return this.gateway_externo.processarPagamento(valor)
    }


}

export default PagamentoAdapter;