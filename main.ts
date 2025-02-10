
//%block="num stack"
//%icon="\ue69b"
//%color="#0cc785"
namespace numstack {

    //%blockid=numstack_write
    //%block="write num string $nstr and stack to character"
    //%nstr.defl="012345678913579024680516273849"
    //%group="main"
    //%weight=10
    export function write(nstr:string) {
        for (let c of nstr.split("")) {
            const nc = parseInt(c)
            if (c != nc.toString()) return ""
        }
        let nlen = 0, tstr = ""
        for (let c of nstr.split("")) {
            nlen += parseInt(c)
        }
        let nrem = Math.floor(nlen / Math.sqrt(nstr.length))
        for (let i = 0;i < nstr.length;i += (nrem+1)) {
            tstr += String.fromCharCode(parseInt(nstr.substr(i,nrem)))
        }
        return ""
    }

    //%blockid=numstack_read
    //%block="read $tstr and split to num string"
    //%tstr.defl="makecodearcade"
    //%group="main"
    //%weight=5
    export function read(tstr:string) {
        let dlen = 0, ustr = "", nstr = ""
        for (let c of tstr.split("")) {
            dlen = Math.max(dlen,c.charCodeAt(0).toString().length)
        }
        for (let c of tstr.split("")) {
            ustr = c.charCodeAt(0).toString()
            if (ustr.length < dlen) while (ustr.length < dlen) ustr = "0" + ustr
            nstr += ustr
        }
        return nstr
    }
}