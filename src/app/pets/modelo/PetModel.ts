export interface PetModel {
  id:number;
  idCliente?:number;
  nomeCliente:string;
  nome:string;
  especie:string;
  raca:string;
}



export interface PetModelRequest {
  id?:number;
  idCliente?:number;
  nome:string;
  especie:string;
  raca:string;
}

