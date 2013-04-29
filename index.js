/*jshint laxcomma:true, asi:true */

module.exports = memindex

/**
 * IN-MEMORY git index 
 * WILL NOT PERSIST !
 */
function memindex () {

    var storage = {}
        
    /**
     * Add entry into index in form of an object with properties:
     * path, hash, type, lastmod
     *
     */
    function add(data) {
        if (data.hash === null) {
            delete storage[data.path] 
        } else {
            storage[data.path] = data;
            delete storage[data.path].path
        }
    }
    
    function remove(path) {
        write({path : path, hash : null });
    }
    
    function diff(path, modtime) {
        return (storage[path].lastmod.getTime() != modtime)
    }
    
    function read(path) {
        return storage[path]
    }
}