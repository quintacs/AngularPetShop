export interface ClienteModel {
    id:number;
    nome:string;
    cpf:string;
    endereco:string;
    telefone:string;
    celular:string;
    email:string;

}

export interface ClienteModelRequest{
  id?:number;
  nome:string;
  cpf:string;
  endereco:string;
  telefone:string;
  celular:string;
  email:string;
}
