import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


interface ICalculoModele {
  salario: number;
  inss: number;
}



interface IResult {
  salarioBruto: number;
  Classificacao: number;
  grauSalarioMinimo: number;
  Adiatamento: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holerite';

model:IResult  = {
 salarioBruto: 0,
 Classificacao: 0,
 grauSalarioMinimo: 0,
 Adiatamento: 0

}



result: any;

constructor() {

}
onsubmit(form = NgForm) {
  if (this.model.salarioBruto <=0 ) {
    return;
  }
  const salarioBruto = this.getClassificacao(this.model.salarioBruto);
  const Classificacao = this.getClassificacao;
  const grauSalarioMinimo = this.getsalarioMinimo(this.model.salarioBruto);
  const Adiatamento = this.getAdiant(this.model.salarioBruto);


console.log(salarioBruto);
console.log(grauSalarioMinimo);
console.log(Adiatamento)



this.result = {
  salarioBruto,
  Classificacao,
  grauSalarioMinimo,
  Adiatamento



}

}



//calculeSalario(salario:number, inss:number) {
//  return salario * 7.5 / 100;
//}



getClassificacao(salarioBruto: number) {
  if(salarioBruto < 1212) {
    return salarioBruto * 7.5 / 100;
  }else if(salarioBruto >= 1212.00 && salarioBruto <=2427.35){
    const v =  (salarioBruto - 1212) * 9 / 100;
    const r = 1212 * 7.5 / 100;
    const l = v + r;

    return l;
  }else{
    return 'teste';
  }
}

getsalarioMinimo(salarioBruto: number) {
  if(salarioBruto < 1212.00) {
    return '0';
  }else if(salarioBruto >= 1212.00 && salarioBruto <=2427.35){
    const v =  (salarioBruto - 1212) * 9 / 100;
    const r = 1212 * 7.5 / 100;
    const l = v + r;
    const g = salarioBruto - l;
    return g;
  }else{
    return 'teste';
  }
}


getAdiant(salarioBruto: number) {
  if(salarioBruto < 1212.00) {
    const g = salarioBruto * 40 / 100;
    return g;
  }else if(salarioBruto >= 1212.00 && salarioBruto <=2427.35){
    const g = salarioBruto * 40 / 100;
    return g;
  }else{
    return 'teste';
  }
}

}
