import {Component, Input, OnInit} from '@angular/core';
import {Hour} from "../../models/hour.model";
import {DatePipe} from "@angular/common";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {ChartModule} from "primeng/chart";

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [
    DatePipe,
    ChartModule
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent implements OnInit {
  @Input() hourList: Hour[] = [];
  hourData: any;
  hourOptions: any;

  constructor(
    private config: DynamicDialogConfig,
    private datePipe: DatePipe
  ) {
    this.hourList = this.config.data?.hourList
  }

  ngOnInit(): void {
    this.hourData = {
      labels: this.hourList.map(v => this.datePipe.transform(v.time_epoch * 1000, 'HH:mm')),
      datasets: [
        {
          label: '',
          data: this.hourList.map(v => v.temp_c.toString()),
          fill: true,
          borderColor: 'rgba(44,44,187,0.85)',
          backgroundColor:'rgba(182,237,253,0.82)',
          tension: 0.4,
          pointStyle: 'image',
          pointBackground: 'assets/right-arrow.png',
          pointRadius: 3
        },
      ]
    };


    this.hourOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: ''
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: ''
          },
          grid: {
            color: '',
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: ''
          },
          grid: {
            color: '',
            drawBorder: false
          }
        }
      }
    };


  }
}
