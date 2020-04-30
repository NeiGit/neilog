import getCallerFile from 'get-caller-file'

export class Logger {
    constructor() {
        this.fileName = getCallerFileName()
    }

    log(header, msg) {
        const date = toTimeOnly(new Date())
        console.log(`${header} - ${date} - ${this.fileName} - ${msg}`)
    }
    
    info(msg) {
        this.log('[INFO]', msg)
    }
    
    error(msg, error) {
        this.log('[ERROR]', msg + ' - ' + error)
    }

    warning(msg, warning = '') {
        this.log('[WARNING]', msg + ' - ' + warning)
    }
}

function getCallerFileName() {
    const fileCompleteName = getCallerFile(3); // constructor caller
    const substringIndex = fileCompleteName.lastIndexOf('/') + 1 // to get file name only
    return fileCompleteName.substring(substringIndex)
}

function toTimeOnly(date) {
    const h = (date.getHours()<10?'0':'') + date.getHours()
    const m = (date.getMinutes()<10?'0':'') + date.getMinutes();
    const s = (date.getSeconds()<10?'0':'') + date.getSeconds();
    return h + ':' + m + ':' + s;
}





