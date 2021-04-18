import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class RichTextEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
