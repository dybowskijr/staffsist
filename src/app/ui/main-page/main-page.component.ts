import { Component, OnInit } from '@angular/core';
import { StaffingService } from '../../service/staffing.service';
import { StaffMember } from '../../core/staff-member';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  staffMembers: StaffMember[];

  constructor(private staffingService: StaffingService) { }

  ngOnInit() {
    this.staffMembers = this.staffingService.getStaff();
  }

}
