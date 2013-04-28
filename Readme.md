# git-index

Given a commit object, a find function and a write function, write out a  git index.


```javascript

```

## API

#### index(commit, find, write) -> index object

#### index.add(path, sha1, type, lastmod)

## Compatibility

Note that this is **NOT** intended to be compatible with the binary index file used 
by C Git.

## References

* https://www.kernel.org/pub/software/scm/git/docs/technical/racy-git.txt
* http://www-cs-students.stanford.edu/~blynn/gg/race.html


## License

MIT
