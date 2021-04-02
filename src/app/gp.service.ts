import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { GPKEY, PRIVATEPINKEY, SEMESTERKEY } from './constants';
import { Semester } from './models/semesters.model';
@Injectable({
  providedIn: 'root'
})
export class GpService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async getData() {
    const finalGP = await this.get(GPKEY);
    const semesters = await this.get(SEMESTERKEY);

    return { gp: finalGP, semesters };
  }


  public async addSemester(data: Semester) {
    let currentSemesters = await this.get(SEMESTERKEY);
    if(!currentSemesters) currentSemesters = [];
    currentSemesters = [...currentSemesters, data];
    await this.set(SEMESTERKEY, currentSemesters);
    this.genarateGeneralGP(currentSemesters);
    return true;
  }

  public async genarateGeneralGP(s) {
    let gen: number = 0;
    
    s.map(t => {
      gen += parseFloat(t.gp)
    });

    let genGp = gen / s.length;

    await this.setFinalGp(genGp.toFixed(2));
  }


  public async setFinalGp(data: any) {
    await this.set(GPKEY, data);
  }


  private async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  private async get(key: string) {
   const data =  await this._storage?.get(key);
   return data;
  }
}
