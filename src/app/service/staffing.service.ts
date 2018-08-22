import { Injectable } from '@angular/core';
import { StaffMember } from '../core/staff-member';

@Injectable({
  providedIn: 'root'
})
export class StaffingService {

  staffers: StaffMember[] = [
    {name: 'Dennis Dybowski', id: 'gi85trf85ku', certifications: null},
    {name: 'Zbignew Jones', id: 't848ikf8588', certifications: null},
    {name: 'Tyrion Lanister', id: '5e885jjtrie8', certifications: null},
    {name: 'Tish Engenuous', id: '3gfji885irj98', certifications: null},
    
  ]

  constructor() { }

  getStaff(filter: any = null): StaffMember[] {
    return this.staffers;
  }
}
