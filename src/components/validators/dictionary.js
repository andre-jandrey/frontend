const dictionary = {
    pt: {
        messages: {
            cnpj: () => 'CNPJ inválido',
            cpf_cnpj: (field) => `Valor inválido para o campo ${field}`,
            cpf: () => 'Valor inválido para o campo',
            required: (field) => `O campo ${field} é obrigatório.`,
            min_value: (field) => `O valor do campo ${field} é inválido.`,
            url: (field) => `O valor do campo ${field} não é uma URL válida.`,
            integer: (field) => `O valor do campo ${field} não é um número.`,
            email: (field) => `O valor do campo ${field} é inválido.`,
        }
    }
}
export default dictionary