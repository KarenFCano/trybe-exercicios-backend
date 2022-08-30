class Student {
  private _matricula: string;
  private _nome: string;
  private _notas_provas: number[];
  private _notas_trabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas_provas = [];
    this._notas_trabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('Nome inválido');
    }
    this._nome = value;
  }

  get notas_provas(): number[] {
    return this._notas_provas;
  }

  set notas_provas(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._notas_provas = value;
  }

  set notas_trabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._notas_trabalhos = value;
  }

  get notas_trabalhos(): number[] {
    return this._notas_trabalhos;
  }

  somaNotas(): number { 
    return [...this._notas_provas, ...this._notas_trabalhos].reduce((acc, curr) => acc + curr, 0) 
  }

  mediaNotas(): number {
    const somaNotas = this.somaNotas();
    const quantidadeNotas = this._notas_provas.length + this._notas_trabalhos.length;
    return Math.round(somaNotas / quantidadeNotas);
  }
}


const personOne = new Student('202001011', 'Maria da Silva');
console.log(personOne);
const personTwo = new Student('202001012', 'João da Silva');
console.log(personTwo);

personOne.notas_provas = [25, 20, 23, 23];
personOne.notas_trabalhos = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somaNotas());
console.log('Média de todas as notas: ', personOne.mediaNotas());