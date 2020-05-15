import CpfValidate from './rules/cpf'
import CnpjValidate from './rules/cnpj'
const validator = {
    getMessage(field, args) { // will be added to default English messages.
        return 'Invalid CPF'
    },
    validate(value, args) {
        return CpfValidate(value) || CnpjValidate(value)
    }
}
export default validator