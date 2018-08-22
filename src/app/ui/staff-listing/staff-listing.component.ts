import { Component, OnInit, Input } from '@angular/core';
import { StaffMember } from '../../core/staff-member';
import { StaffingService } from '../../service/staffing.service';

@Component({
  selector: 'app-staff-listing',
  templateUrl: './staff-listing.component.html',
  styleUrls: ['./staff-listing.component.css']
})
export class StaffListingComponent implements OnInit {
    @Input() staffMembers : StaffMember[];

  constructor() {

  }

  ngOnInit() {
  }

}
