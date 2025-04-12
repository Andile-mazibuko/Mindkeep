import { Component } from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  note: Note = {
    title: '',
    content:''
    
  }

  onFormSubmit(){
    console.log(this.note)
    this.note = {
      title: '',
      content:''
    }
  }
}
