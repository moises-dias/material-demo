import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''),
      map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }





  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  options: string[] = ['angular', 'react', 'vue'];
  objectOptions = [
    {name: 'angular'},
    {name:'angular material'},
    {name: 'react'},
    {name: 'vue'}
  ]

  selectedValue: string;
  opened = false;
  title = 'material-demo';
  showSpinner = false;
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000)
  }
  log(state) {
    console.log(state);
  }
}
