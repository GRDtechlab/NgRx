import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [NgClass],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  standalone: true,
})
export class FilterComponent {
  isFilterSidebarOpen = false;
  toggleFilterSidebar() {
    this.isFilterSidebarOpen = !this.isFilterSidebarOpen;
  }
}
