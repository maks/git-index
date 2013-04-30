# git-index

A git index (aka dir cache)


```javascript

var load = require('git-fs-repo')
  , index = require('./index.js')
  , init = require('git-init-index')

load('.git', function(err, git) {
  var head = git.ref('HEAD').hash
  git.find(head, gothead)

  function gothead(err, commit) {
    console.log("head commit:"+commit.message());
    init(commit, git.find.bind(git), index.add)
  }
})
```

## API

#### index(write)

persist the index by passing in a write function that will be called
each time a change is made to the index.
the write fucntion will be passed the entire contents of index as a object
with the path of each index entry as propeties on the object and the values
being objects in the form of:


#### index.add({path, sha1, type, lastmod})

Add a git object (blob/tree/tag)
where 
* path is the relative path of the git object within the repo
* sha1 is a Buffer containing the 160bit SHA1 of the git object
* type is the numeric type of the object: 
* lastmod is the Date the object was last modified in the working dir

#### index.remove(path)

Remove the object at the given path from the index

#### index.diff(path, modtime) -> boolean

Check if the object at the given path in the index has a different modtime to the modtime given

#### read(path) -> {path, sha1, type, lastmod}

return the current data in the index for the entry specificed by the path

## References

* http://code.google.com/p/git-core/source/browse/Documentation/technical/index-format.txt
* https://www.kernel.org/pub/software/scm/git/docs/technical/racy-git.txt
* http://www-cs-students.stanford.edu/~blynn/gg/race.html


## License

MIT
