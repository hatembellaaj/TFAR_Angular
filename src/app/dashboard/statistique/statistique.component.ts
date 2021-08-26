import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as Chart from 'chart.js';
import { FicheService } from 'src/app/services/fiche.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit, DoCheck {

  varf: any;
  varf1: any;
  varp:any;
  varp1:any;

  PieChart: any;
  BarChart: any;

  PieChart1: any;
  BarChart1: any;

  PieChart2: any;
  BarChart2: any;

  PieChart3: any;
  BarChart3: any;

  nbreMale!: number;
  nbrFemale!: number;

  nbreFaite!:number;
  nbreNonFaite!:number;
  nbreMoin1!:number;
  nbreNP!:number;

  nbre1Normale!:number;
  nbre1Diminuee!:number;
  nbre1Moin1!:number;
  nbre1NP!:number;


  nbre2Normale!:number;
  nbre2Dysplasie!:number;
  nbre2Moin1!:number;

  bool = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;

  constructor(private ficheService: FicheService) {




  }
  ngDoCheck(): void {

    if ((this.bool == true)  && (this.varp1=='sexe')){


      setTimeout(()=>{
        this.fcnChart();

    }, 20);

      this.bool = false;

      console.log("dddd");

    }

    if ((this.bool2 == true) && (this.varf1=='uiv')) {


      setTimeout(()=>{
        this.fcnChartf1();

    }, 20);

      //this.fcnChartf1();
      this.bool2 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool3 == true) && (this.varf1=='cellularite')) {


      setTimeout(()=>{
        this.fcnChartf2();

    }, 20);

      //this.fcnChartf1();
      this.bool3 = false;

      console.log('cccccccccccc');


    }


    if ((this.bool4 == true) && (this.varf1=='morphologie')) {


      setTimeout(()=>{
        this.fcnChartf3();

    }, 20);

      //this.fcnChartf1();
      this.bool4 = false;

      console.log('cccccccccccc');


    }


  }




  ngOnInit(): void {

    this.ficheService.getMF_Patient().subscribe(data => {
      this.nbreMale = data.Male;
      this.nbrFemale = data.Female;
      console.log('gggfxwxs', this.nbreMale, this.nbrFemale);
      if ((this.nbreMale != undefined) && (this.nbrFemale != undefined)) {
        this.bool = true;
      }

    });

    this.ficheService.getnbre_UIV().subscribe(data=>{
      this.nbreFaite=data.Faite;
      this.nbreNonFaite=data.Nonfaite;
      this.nbreMoin1=data.Moin1;
      this.nbreNP=data.np;

      if ((this.nbreFaite != undefined) && (this.nbreNonFaite != undefined) && (this.nbreMoin1 != undefined) && (this.nbreNP != undefined)) {
        this.bool2 = true;
      }
    })

    this.ficheService.getnbre_cellu().subscribe(data=>{
      this.nbre1Normale=data.Normale;
      this.nbre1Diminuee=data.Diminuee;
      this.nbre1Moin1=data.Moin1;
      this.nbre1NP=data.np;

      if ((this.nbre1Normale != undefined) && (this.nbre1Diminuee != undefined) && (this.nbre1Moin1 != undefined) && (this.nbre1NP != undefined)) {
        this.bool3 = true;
      }
    })

    this.ficheService.getnbre_morphologie().subscribe(data=>{
      this.nbre2Normale=data.Normale;
      this.nbre2Dysplasie=data.Dysplasie;
      this.nbre2Moin1=data.Moin1;

      if ((this.nbre2Normale != undefined) && (this.nbre2Dysplasie != undefined) && (this.nbre2Moin1 != undefined)) {
        this.bool4 = true;
      }
    })


  }

  SubFiche(varf: any) {

    this.varf1 = varf;


  }

  SubPatient(varp:any){

    this.varp1=varp;

  }

  fcnChart() {

    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Male", "Female"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbreMale, this.nbrFemale]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Male", "Female"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbreMale, this.nbrFemale],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }





  fcnChartf1() {

    // pie chart:
    this.PieChart1 = new Chart('pieChart1', {
      type: 'pie',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbreFaite, this.nbreNonFaite,this.nbreMoin1,this.nbreNP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart1 = new Chart('barChart1', {
      type: 'bar',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbreFaite, this.nbreNonFaite,this.nbreMoin1,this.nbreNP],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }








  fcnChartf2() {

    // pie chart:
    this.PieChart2 = new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ["Normale", "Diminuee", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre1Normale, this.nbre1Diminuee,this.nbre1Moin1,this.nbre1NP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart2 = new Chart('barChart2', {
      type: 'bar',
      data: {
        labels: ["Normale", "Diminuee", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre1Normale, this.nbre1Diminuee,this.nbre1Moin1,this.nbre1NP],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }





  fcnChartf3() {

    // pie chart:
    this.PieChart3 = new Chart('pieChart3', {
      type: 'pie',
      data: {
        labels: ["Normale", "Dysplasie", "Moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre2Normale, this.nbre2Dysplasie,this.nbre2Moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart3 = new Chart('barChart3', {
      type: 'bar',
      data: {
        labels: ["Normale", "Dysplasie", "Moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre2Normale, this.nbre2Dysplasie,this.nbre2Moin1],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }


}
