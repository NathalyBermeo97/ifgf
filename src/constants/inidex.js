export const SERVER_RESPONSE = {
    SUCCESFUL_USER_REGISTRATION: "Usuario registrado con éxito",
    NEWS_ITEM_CREATED: 'registro de donación correctamente',
    DELETED_ALBUMS:'Eliminado con éxito',
    DELETED_MESSAGES:'Eliminado con éxito',
    DELETED_NEWS:'Eliminado con éxito',
    DELETED_EVENT:'Eliminado con éxito'
}

export const ERROR_MESSAGES = {
    MATCH: 'Entrada no válida',
    MATCHYOUTUBE: 'Url de YouTube no valido',
    MATCHLETTER: 'Ingrese solo letras',
    MATCHNUMBER:'Ingrese solo números',
    EMAIL: 'El campo debe ser un email válido',
    DATE: 'Ingrese una fecha válida',
    REQUIRED: (field) => `El campo ${field} es requerido`,
    NUMBER: (field) => `El campo ${field} debe ser un número`,
    MIN_STRING: (field, min) => `El campo ${field} debe tener al menos ${min} caracteres`,
    MAX_STRING: (field, max) => `El campo ${field} debe tener como máximo ${max} inscripciones`,
    MAX1_STRING: (field, max) => `El campo ${field} debe tener como máximo ${max} números`,
    MAX2_STRING: (field, max) => `El campo ${field} debe tener como máximo ${max} caracteres`,
    MAX_NUMBER: (field, max) => `El campo ${field} debe tener como máximo ${max} dígitos`
}