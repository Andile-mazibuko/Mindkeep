import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Note,private dialogRef: MatDialogRef<EditComponent>,private noteServ: NoteService){}

  

  editNote() {
    this.noteServ.updateNote(this.data).subscribe(()=>{})
    this.dialogRef.close();
  }

  closeDialog() {
    //console.log(this.data)
    this.dialogRef.close(); // Close the dialog without sending data
  }
}
