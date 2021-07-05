import {Component, Input} from '@angular/core'

import {PopularTagType} from '@shared/types/popular-tag.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input('tags') tagsProps!: PopularTagType[]
}
