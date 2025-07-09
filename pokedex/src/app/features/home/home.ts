import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'], 
})
export class Home {}
