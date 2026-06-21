function validarBI(bi) {
    const regex = /^\d{9}[A-Z]{2}\d{3}$/;

    if (!regex.test(bi)) {
        return {
            valido: false,
            mensagem: "Formato inválido"
        };
    }

    return {
        valido: true,
        mensagem: "Formato válido"
    };
}
