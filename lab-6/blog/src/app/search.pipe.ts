import { Pipe, PipeTransform } from '@angular/core';

import type { Post } from './app.component';

@Pipe({
  name: 'search',
  pure: true,
})
export default class SearchPipe implements PipeTransform {
  transform(posts: Post[], search: string = '') {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
