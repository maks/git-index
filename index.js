/*jshint laxcomma:true, asi:true */

module.exports = index

/**
 * IN-MEMORY git index, pass in a writer function
 * if you want to persist the index somewhere
 * The write function will be passed a object param
 * with the contents of the index
 */
function index(write) {

    function GitIndex() {
        this._entries = {};
    }
    /**
     * Add entry into index in form of an object with properties:
     * path, hash, type, lastmod
     *
     */
        
    GitIndex.prototype.add = function (entry) {
        if (entry.path) {
            entry.hash = entry.hash.toString('hex')
            console.log("add2index:"+JSON.stringify(entry));
            this._entries[entry.path] = entry
            write(this._entries)
        }
    }
    
    GitIndex.prototype.remove = function (path) {
        delete this._entries[path] 
    }
    
    GitIndex.prototype.diff = function (path, modtime) {
        return (this._entries[path].lastmod.getTime() != modtime);
    }
    
    GitIndex.prototype.read = function (path) {
        return this._entries[path]
    }
    return new GitIndex();
}