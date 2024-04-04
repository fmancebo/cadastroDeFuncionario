var Sexo;
(function (Sexo) {
    Sexo[Sexo["masculino"] = 0] = "masculino";
    Sexo[Sexo["feminino"] = 1] = "feminino";
})(Sexo || (Sexo = {}));
var EstdCivil;
(function (EstdCivil) {
    EstdCivil[EstdCivil["solteiro"] = 0] = "solteiro";
    EstdCivil[EstdCivil["casado"] = 1] = "casado";
    EstdCivil[EstdCivil["divorciado"] = 2] = "divorciado";
    EstdCivil[EstdCivil["viuvo"] = 3] = "viuvo";
})(EstdCivil || (EstdCivil = {}));
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cpf, dataNasc, sexo, estdCivil, rendaMensal, endereco, cargo) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.sexo = sexo;
        this.estdCivil = estdCivil;
        this.rendaMensal = rendaMensal;
        this.endereco = endereco;
        this.cargo = cargo;
        this.id = Funcionario.proximoID();
    }
    Funcionario.proximoID = function () {
        Funcionario.ultimoId += 1;
        return Funcionario.ultimoId;
    };
    Funcionario.ultimoId = 0;
    return Funcionario;
}());
var Cargo;
(function (Cargo) {
    Cargo[Cargo["administrativo"] = 0] = "administrativo";
    Cargo[Cargo["juridico"] = 1] = "juridico";
    Cargo[Cargo["comercial"] = 2] = "comercial";
    Cargo[Cargo["marketing"] = 3] = "marketing";
})(Cargo || (Cargo = {}));
var Departamento = /** @class */ (function () {
    function Departamento(nome, local, funcionario) {
        this.nome = nome;
        this.local = local;
        this.funcionario = funcionario;
    }
    return Departamento;
}());
var Empresa = /** @class */ (function () {
    function Empresa(nome, departamento, funcionario) {
        this.nome = nome;
        this.departamento = departamento;
        this.funcionario = funcionario;
    }
    Empresa.prototype.novoFuncionario = function (nome, cpf, dataNasc, sexo, estdCivil, rendaMensal, endereco, departamento, cargo) {
        var novoempregado = new Funcionario(nome, cpf, dataNasc, sexo, estdCivil, rendaMensal, endereco, cargo);
        this.funcionario.push(novoempregado);
        departamento.funcionario.push(novoempregado);
    };
    Empresa.prototype.removerFuncionario = function (id) {
        var index = this.funcionario.findIndex(function (n) { return n.id === id; });
        if (index !== -1) {
            this.funcionario.splice(index, 1);
        }
        else {
            throw new Error("ID não encontrado");
        }
    };
    Empresa.prototype.listaDeFuncionarios = function () {
        for (var _i = 0, _a = this.funcionario; _i < _a.length; _i++) {
            var empregado = _a[_i];
            console.log("Empregado: ".concat(empregado.nome, "\n                Cargo: ").concat(empregado.cargo, "\n                Id: ").concat(empregado.cargo, "\n            "));
        }
    };
    return Empresa;
}());
