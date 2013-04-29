# git-index

A git index


```javascript

var load = require('git-fs-repo')
  , index = require('./index.js')
  , init = require('git-init-index')

load('../testsite/.git', function(err, git) {
  var head = git.ref('HEAD').hash
  git.find(head, gothead)

  function gothead(err, commit) {
    console.log("head commit:"+commit.message());
    init(commit, git.find.bind(git), index.add)
  }
})
```

## API

#### index(commit, find, write) -> index object

#### index.add(path, sha1, type, lastmod)

## Compatibility

Note that this is **NOT** intended to be compatible with the binary index file used 
by C Git.

## References

* http://code.google.com/p/git-core/source/browse/Documentation/technical/index-format.txt
* https://www.kernel.org/pub/software/scm/git/docs/technical/racy-git.txt
* http://www-cs-students.stanford.edu/~blynn/gg/race.html


## License

MIT
