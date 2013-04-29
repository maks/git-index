/*jshint laxcomma:true, asi:true */

module.exports = index;

var walk = require('git-walk-tree')

/**
 * write - callback function to store entries in the index, it will be called for each entry to 
 *         be written into the git index. It receives a single argument a object with properties:
 *           path{String}, hash{Buffer}, type {Number}, mode, lastmod {Date}
 *  
 */
function index(commit, find, write) {
    var now = new Date()
    walk(find, commit)
      .on('data', function(data) {
          var idxEntry = {
              path : '',
              hash : data.hash,
              type : data.type,
              mode: 0,
              lastmod : now 
          }
          idxEntry.path += data.stack.map(function(s) { return s.name}).join("/")
          idxEntry.mode = (data.stack.length > 0) ? data.stack[data.stack.length-1].mode : 0;
          write(idxEntry)
      })
  
    
    // add entry to index, possibly updating an existing entry for that path
    function add(path, hash, type, lastmod) {
        write( { 
            path : path,
            hash : hash,
            type : type,
            lastmod : lastmod
        })
    }
    
    function remove(path) {
        write({path : path, hash : null });
    }
}
