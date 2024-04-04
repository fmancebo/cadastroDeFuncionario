
enum Sexo{
    masculino,
    feminino
}
enum EstdCivil{
    solteiro,
    casado,
    divorciado,
    viuvo
}
interface End{
    logradouro:string
    numero:number
    complemento: string
    estado: string
    cidade: string
}

class Funcionario{
    static ultimoId = 0
    nome:string
    cpf: string
    dataNasc: Date
    sexo: Sexo
    estdCivil: EstdCivil
    rendaMensal: number
    endereco: End
    cargo: Cargo
    id:number

    static proximoID():number{
        Funcionario.ultimoId += 1
        return Funcionario.ultimoId
    }

    constructor(
        nome:string,
        cpf: string,
        dataNasc: Date,
        sexo: Sexo,
        estdCivil: EstdCivil,
        rendaMensal: number,
        endereco: End,
        cargo: Cargo
    ){
        this.nome = nome
        this.cpf = cpf
        this.dataNasc = dataNasc
        this.sexo = sexo
        this.estdCivil = estdCivil
        this.rendaMensal = rendaMensal
        this.endereco = endereco
        this.cargo = cargo
        this.id = Funcionario.proximoID()
    }
}

enum Cargo{
    administrativo,
    juridico,
    comercial,
    marketing
}
interface Local{
    andar: number
    sala: number
}

class Departamento{
    nome: Cargo
    local: Local
    funcionario: Funcionario[]

    constructor(
        nome: Cargo,
        local: Local,
        funcionario: Funcionario[]
    ){
        this.nome = nome
        this.local = local
        this.funcionario = funcionario
    }
}

class Empresa{
    nome:string
    departamento: Departamento[]
    funcionario: Funcionario[]

    constructor(
        nome:string,
        departamento: Departamento[],
        funcionario: Funcionario[]
    ){
        this.nome = nome
        this.departamento = departamento
        this.funcionario = funcionario
    }
    novoFuncionario(nome:string, cpf: string, dataNasc: Date, sexo: Sexo,  estdCivil: EstdCivil, rendaMensal: number, endereco: End, departamento:Departamento, cargo: Cargo):void{
        let novoempregado = new Funcionario (nome, cpf, dataNasc, sexo,  estdCivil, rendaMensal, endereco, cargo)
        this.funcionario.push(novoempregado)
        departamento.funcionario.push(novoempregado)
    }
    removerFuncionario(id:number):void{
        let index = this.funcionario.findIndex(n => n.id === id)
        if(index !== -1){
            this.funcionario.splice(index,1)
        }else{
            throw new Error("ID não encontrado")
        }
    }
    listaDeFuncionarios():void{
        for(let empregado of this.funcionario){
            console.log(
                `Empregado: ${empregado.nome}
                Cargo: ${empregado.cargo}
                Id: ${empregado.cargo}
            `)
        }
    }
    
}
