/*jshint laxcomma:true, asi:true */

module.exports = indexStore

var memIndex = {}

function indexStore () {
        
    function write(data) {
        if (data.hash === null) {
            delete memIndex[data.path] 
        } else {
            memIndex[data.path] = data;
            delete memIndex[data.path].path
        }
    }
    
    function diff(path, modtime) {
        return (memIndex[path].lastmod.getTime() != modtime)
    }
    
    function read(path) {
        return memIndex[path]
    }
}