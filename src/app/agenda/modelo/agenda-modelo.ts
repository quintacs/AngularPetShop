export interface AgendaModel{

    id:number;
    dataAgendamento:Date;
    dataAgendamentoFormatada:string;
    idCliente:number;
    idServicos:number[];
    nomeCliente:string;
    telefoneCliente:string;
    celularCliente:string;
    emailCliente:string;

}


export interface AgendaModelRequest{

    id?:number;
    dataAgendamento:string;
    idCliente:number;
    idServicos:number[];
    
}