import { HttpUtil } from './../service/httpUtil';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  organizacaoSelecionada : number;
  organizacoes : any = [{"value":1, "label": "Senepol"}, {"value":2, "label": "Intergado"}];
  fazendas : any = [{"value":1, "label": "Senepol"}, {"value":2, "label": "Intergado"}];
  fazendasByOrganizacao : any = [];
  
  errorCep: boolean = false;
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
 // public mask = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
 panelOpenState: boolean = true;
  color = 'accent';
  checked = false;
  disabled = false;
  cep: string = '';
  cepValido: boolean = false;

  rua: string = "";
  bairro: string = "";
  cidade: string = "";
  uf: string = "";

  // tslint:disable-next-line:no-inferrable-types
  public answer: string = 'Lucas';
  // tslint:disable-next-line:no-inferrable-types
  public answerDisplay: string = '';
  // tslint:disable-next-line:no-inferrable-types
  public showSpinner: boolean = false;

  public showSpinnerCep: boolean = false;

  constructor(public snackBar: MatSnackBar, private httpUtil: HttpUtil) {

  }

  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.openSnackBar('Your answer', this.answer);

      this.showSpinner = false;
    }, 5000);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  buscarCep() {
    this.showSpinnerCep = true;
    this.cepValido = false;
    this.errorCep = false;

    setTimeout(() => {
      this.showSpinnerCep = false;
      let url = "https://viacep.com.br/ws/" + this.cep + "/json/";
      this.httpUtil.get(url, response => {
        console.log(response);
        if (!response.erro) {
          this.rua = response.logradouro;
          this.bairro = response.bairro;
          this.cidade = response.localidade;
          this.uf = response.uf;
          this.errorCep = false;
          this.cepValido = true;
        } else {
          this.cepValido = false;
          this.errorCep = true;
        }
      }, error => {
        this.cepValido = false;
        this.errorCep = true;
        console.error(error);
      });
    }, 1000);

  }

  getErrorMessage() {
    return "CEP inválido";
  }

  selecionarOrganizacao(){
    
  }

}
