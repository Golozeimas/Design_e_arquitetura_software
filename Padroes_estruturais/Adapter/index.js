import GatewayExterno from "./GatewayExterno.js";
import PagamentoAdapter from "./PagemantoAdapter.js";
import VendaService from "./VendaService.js";


const gateway = new GatewayExterno();

const adapterPagamento = new PagamentoAdapter();

const vendaService = new VendaService(adapterPagamento)

vendaService.finalizarVenda(250)
