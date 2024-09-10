import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import { DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Weather-App';
}
