class VendaService {
  constructor(pagamento) {
    this.pagamento = pagamento;
  }

  finalizarVenda(valor) {
    const resultado = this.pagamento.pagar(valor);

    if (resultado.sucesso) {
      console.log("Venda finalizada!");
    }

    return resultado;
  }
}

export default VendaService;