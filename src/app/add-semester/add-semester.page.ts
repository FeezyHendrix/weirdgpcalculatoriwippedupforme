import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GRADEKEY, GRADES } from '../constants';
import { GpService } from '../gp.service';
import { CourseData, Semester } from '../models/semesters.model';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.page.html',
  styleUrls: ['./add-semester.page.scss'],
})
export class AddSemesterPage implements OnInit {

  courseData: Array<CourseData> = [];

  calculatedGP: any = 0;
  totalunits: number = null;

  grades: Array<any>;
  gradeKey: any;
  constructor(private gpService: GpService, private toastctrl: ToastController, private router: Router) {
    this.grades = GRADES;
    this.gradeKey = GRADEKEY;

    [1, 2, 3].map((i) => {
      this.courseData.push({ coursename: '', unit: i, grade: this.grades[0] });
    })
  }




  calculate() {
    let TQP = 0;
    let units = 0;
    this.courseData.map(item => {
      console.log(item, this.gradeKey[item.grade]);
      TQP += item.unit * parseInt(this.gradeKey[item.grade]);
      units += item.unit;
    });

    this.calculatedGP = TQP / units;
    this.calculatedGP = this.calculatedGP.toFixed(2);
    this.totalunits = units;
  };

  remove(index) {
    this.courseData.splice(index, 1);
  }

  async save() {
    let semester: Semester = {
      totalunits: this.totalunits,
      courseData: this.courseData,
      gp: this.calculatedGP,
      createdAt: new Date()
    };

    await this.gpService.addSemester(semester);
    const toast = await this.toastctrl.create({
      message: "Added successfully",
      duration: 200,
      position: 'middle'
    });
    toast.present();
    this.router.navigate(['/']);
  }


  add() {
    this.courseData.push({ coursename: '', unit: 1, grade: this.grades[0] });
  }

  ngOnInit() {
  }

}
