import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { DetailsSpeakerComponent } from './details-speaker/details-speaker.component';
import { ListSpeakersComponent } from './list-speakers/list-speakers.component';
import { FilterPipe } from '../filter.pipe';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';



@NgModule({
  declarations: [
    AddSpeakerComponent,
    EditSpeakerComponent,
    DetailsSpeakerComponent,
    ListSpeakersComponent,
    FilterPipe,
    DeleteSpeakerComponent,
  ],
  imports: [
  CommonModule,FormsModule
  ],
  exports:[ 
     AddSpeakerComponent,
    EditSpeakerComponent,
    DetailsSpeakerComponent,
    ListSpeakersComponent]
})
export class SpeakerModule { }
