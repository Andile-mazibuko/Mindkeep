import { Component } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  note: Note = {title: '',content:''}
  
  constructor(private noteService: NoteService){}

  onFormSubmit(){
    
    this.noteService.addNote(this.note).subscribe(() => {
      this.note = {title: '',content:''}
      //TODO: UPDATE THE NOTES LIST
    })    
  }
}
