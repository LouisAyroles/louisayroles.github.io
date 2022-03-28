import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import {BaseChartDirective} from "ng2-charts";
import {CvService} from "./cv.service";
import {Education} from "../domain/education";
import {Experience} from "../domain/experience";
import {Hobie} from "../domain/hobie";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})

export class CvComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  education : Education[]
  experience : Experience[]
  hobbies : Hobie[]

  constructor(private cvService : CvService){

  }


  public isLoading : boolean = true;

  ngOnInit(): void {
    this.education = this.cvService.getAllEducation()
    this.experience = this.cvService.getAllExperience()
    this.hobbies = this.cvService.getAllHobbies()
  }

  titlesLanguage = [ 'C, C#', 'JAVA' , 'Kotlin', 'HTML & CSS', 'OCaml', 'Python', 'SQL'];

  titleTooltip : any = (tooltipItems : any) => {
    return this.titlesLanguage;
  }

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: tooltipItems => {
            return (tooltipItems.chart.data.labels as string[])[tooltipItems.dataIndex];
          }
        },
        displayColors: false
      },
      legend: {
        display: true,
        position: 'right',
      },
    }
  };



  public pieChartDataLanguages: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'C, C#', 'JAVA' , 'Kotlin', 'HTML & CSS', 'OCaml', 'Python', 'SQL'],
    datasets: [ {
      data: [ 500, 500, 200, 300,200,200, 200 ],
      backgroundColor: [
       '#52cffe', '#69bff8', '#79b3f4', '#8aa7ec', '#9a9ae1','#aa8fd8', '#ba83ca'
      ],
      hoverBackgroundColor: [
        '#10bcfd','#26a2f4', '#368dee', '#4a77e1', '#6060cf', '#825ac5', '#a055b6'
      ],
      hoverBorderColor: [
        '#10bcfd','#26a2f4', '#368dee', '#4a77e1', '#6060cf', '#825ac5', '#a055b6'
      ]
    } ]
  };


  public pieChartDataTools: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Git', 'Android Studio' , 'IntelliJ', 'Eclipse', 'Jira & Trello', 'Jenkins', 'Netbeans', 'Visual Studio', 'SSMS'],
    datasets: [ {
      data: [ 500, 200, 400, 300,200,100, 200, 200, 200 ],
      backgroundColor: [
       '#d16ba5', '#c777b9', '#ba83ca','#aa8fd8', '#9a9ae1', '#8aa7ec', '#79b3f4', '#69bff8','#52cffe'
      ],
      hoverBackgroundColor: [
        '#c13c88','#b44aa2', '#a055b6', '#825ac5', '#6060cf', '#4a77e1', '#368dee',  '#26a2f4','#10bcfd'
      ],
      hoverBorderColor: [
        '#c13c88','#b44aa2', '#a055b6', '#825ac5', '#6060cf', '#4a77e1', '#368dee',  '#26a2f4','#10bcfd'
      ]
    } ]
  };

  public pieChartDataFrameworks: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Spring', 'Angular' , 'VueJS', '.NET', 'Tailwind', 'Bootstrap', 'React', 'NuxtJs'],
    datasets: [ {
      data: [ 500, 500, 400, 300,200,200, 100, 300 ],
      backgroundColor: [
        '#8aa7ec', '#9a9ae1','#aa8fd8', '#ba83ca','#c777b9',  '#d16ba5',  '#52cffe', '#69bff8'
      ],
      hoverBackgroundColor: [
        '#668ce6','#7979d7', '#825ac5', '#a055b6', '#b44aa2', '#c13c88', '#10bcfd', '#26a2f4'
      ],
      hoverBorderColor: [
        '#668ce6','#7979d7', '#825ac5', '#a055b6', '#b44aa2', '#c13c88', '#10bcfd', '#26a2f4'
      ]
    } ]
  };

  public pieChartType: ChartType = 'pie';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
