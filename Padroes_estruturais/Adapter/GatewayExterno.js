class GatewayExterno {
  processarPagamento(dados) {
    console.log(
      `Pagamento de R$ ${dados.quantia} ` +
      `processado em ${dados.moeda}`
    );

    return {
      sucesso: true,
      transacao: "TXN-123"
    };
  }
}

export default GatewayExterno;