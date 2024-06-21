export interface Cliente{
    id:string,
    nombre:string,
    genero:string,
    pais:string,
    estado:string,
    avatarSRC:string
}

export interface Genero{
    id:string,
    nombre:string
}

export interface Pais{
    id:string,
    nombre:string
}

export interface Estado{
    id:string,
    nombre:string,
    pais_id:string
}

export interface PeticionCliente{
    nombre:string,
    genero:string,
    pais:string,
    estado:string,
    avatarSRC:string
}