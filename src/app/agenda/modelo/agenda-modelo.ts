export interface AgendaModel{

    id:number;
    dataAgendamento:Date;
    idCliente:number;
    idServicos:number[];

}


export interface AgendaModelRequest{

    id?:number;
    dataAgendamento:string;
    idCliente:number;
    idServicos:number[];
    
}