import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})

export class CvComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public isLoading : boolean = true;

  ngOnInit(): void {
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
      data: [ 300, 500, 100, 200,200,200, 200 ],
      backgroundColor: [
        '#E3B9FF','#A5C1E5', '#CCFFCC', '#FEE1A0', '#FFCCBC', '#EBF0F9', '#FFFF99'
      ],
      hoverBackgroundColor: [
        '#BF5FFF','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
      ],
      hoverBorderColor: [
        '#BF5FFF','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
      ]
    } ]
  };


  public pieChartDataTools: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Git', 'Android Studio' , 'IntelliJ', 'Eclipse', 'Jira & Trello', 'Jenkins', 'Netbeans', 'Visual Studio', 'SSMS'],
    datasets: [ {
      data: [ 300, 500, 100, 200,200,200, 200 ],
      backgroundColor: [
       '#d16ba5', '#c777b9', '#ba83ca','#aa8fd8', '#9a9ae1', '#8aa7ec', '#79b3f4', '#69bff8','#52cffe'
      ],
      hoverBackgroundColor: [
        '#A2627A','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
      ],
      hoverBorderColor: [
        '#BF5FFF','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
      ]
    } ]
  };

  public pieChartDataFrameworks: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Spring', 'Angular' , 'VueJS', '.NET', 'Tailwind', 'Bootstrap', 'React', 'NuxtJs'],
    datasets: [ {
      data: [ 300, 500, 100, 200,200,200, 200 ],
      backgroundColor: [
        '#04f696', '#0ce37e', '#0fcf66', '#10bd4e', '#0faa36', '#09a032', '#04952d', '#008b29'
      ],
      hoverBackgroundColor: [
        '#A2627A','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
      ],
      hoverBorderColor: [
        '#BF5FFF','#3063A5', '#9AFF9A', '#FCB514', '#FF8C69', '#567FCE', '#FFFF00'
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
