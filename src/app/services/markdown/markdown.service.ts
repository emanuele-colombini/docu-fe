import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarkdownBean } from 'src/app/beans/MarkdownBean';

import md from 'markdown-it';
import mdp from 'markdown-it-plantuml';
import mdh from 'markdown-it-highlightjs';
import mdh_java from 'highlight.js/lib/languages/java';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  private markdown: md;
  
  constructor(
    private http: HttpClient
  ) { 
    this.markdown = md().use(mdp).use(mdh, {
      register: {
        java: mdh_java
      }
    });
  }

  public loadMarkdown(): Observable<string> {
    return this.http
      .get<MarkdownBean>(environment.markdownApi, { responseType: 'json' })
      .pipe(
        map(mb => atob(mb.content))
      )
  }

  public renderMarkdown(source: string): string {
    return this.markdown.render(source); 
  }
}
