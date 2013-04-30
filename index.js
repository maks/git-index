/*jshint laxcomma:true, asi:true */

module.exports = index

/**
 * IN-MEMORY git index, pass in a writer function
 * if you want to persist the index somewhere
 * The write function will be passed a object param
 * with the contents of the index
 */
function index(write) {

    var entries = {}
        
    /**
     * Add entry into index in form of an object with properties:
     * path, hash, type, lastmod
     *
     */
    function add(entry) {
        entries[entry.path] = entry;
        write(entries);
    }
    
    function remove(path) {
        delete entries[path] 
    }
    
    function diff(path, modtime) {
        return (entries[path].lastmod.getTime() != modtime)
    }
    
    function read(path) {
        return entries[path]
    }
}