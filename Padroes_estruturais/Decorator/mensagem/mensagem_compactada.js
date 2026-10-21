class MensagemCompactada{
    constructor(mensagem){
        this.mensagem = mensagem
    }

    enviar(texto){
        const resultado = this.mensagem.enviar(texto)
        return `[Mensagem compactada] ${resultado}`
    }
}