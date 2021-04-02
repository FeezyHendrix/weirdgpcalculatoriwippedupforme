import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GpService } from '../gp.service';
import { Semester } from '../models/semesters.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  gp: any;
  semesters: Array<Semester>;

  constructor(private GpService: GpService, public router: Router) { }

  async ngOnInit() {
    await this.GpService.init();
    this.init();
  }

  ionViewDidEnter() {
   this.init();
  }
  

  async init() {
    const { gp, semesters } = await this.GpService.getData();
    this.gp = gp ?? "0.0";
    this.semesters = semesters;

    console.log(this.gp, this.semesters);
  }

  goToAddSemester() {
    this.router.navigate(['/add-semester']);
  }
}
