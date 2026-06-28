const event = require('events')
const chatGrp = new event.EventEmitter()

let activeUser = []

chatGrp.on('updateAuditLogs', (eventType, name)=>{
    const fs = require('fs')
    let data = `${new Date().toISOString()} - ${eventType} - ${name ? name : ''}`

    fs.appendFile('audit2.txt', data,(err)=>{
        if(err) throw err
    })
})
    



chatGrp.on('join', (name)=>{
    console.log(`${name} join the grp`)
    activeUser.push(name)
    chatGrp.emit('updateAuditLogs', 'join', name)
    // auditLogs.push({event: 'join', user: name, timeStamp: new Date()})
})

chatGrp.on('leave', (name)=>{
    console.log(`${name} leave the grp`)
    activeUser.splice(activeUser.indexOf(name),1)
    chatGrp.emit('updateAuditLogs', 'leave', name)
    // auditLogs.push({event: 'leave', user: name, timeStamp: new Date()})
})

chatGrp.on('fetchActiveUsers', ()=>{
    activeUser.forEach((user)=>{
        console.log(`Active User : ${user}`);
    })
    console.log(`Total Active user : ${activeUser.length}`)

    chatGrp.emit('updateAuditLogs', 'fetchActiveUsers')
    // auditLogs.push({event: 'fetchActiveUsers', timeStamp: new Date()})
})

// chatGrp.on('auditLogs', ()=>{
//     console.log("Audit log : ")
//     auditLogs.forEach((log)=>{
//         console.log(`${log.timeStamp.toISOString()} - ${log.event} - ${log.user ? log.user : ''}`)
//     })
    
// })

chatGrp.on('msg', (name,msg)=>{
    console.log(`${name} join the grp and Msg is ${msg}`)
    chatGrp.emit('updateAuditLogs', 'msg', name)
})

// chatGrp.on('auditLogsToFile', ()=>{
//     const fs = require('fs')
//     let data = auditLogs.map(log => `${log.timeStamp.toISOString()} - ${log.event} - ${log.user ? log.user : ''}`).join('\n')

//     fs.writeFile('audit.txt',data,(err)=>{
//         if(err) console.log(err)
//             else console.log('data log successfull')
//     })
// })

chatGrp.emit('join','Kashyap');
chatGrp.emit('join','Sai');
chatGrp.emit('msg','Kashyap','Hello everyone!');
chatGrp.emit('msg','Sai','Hi Kashyap!');
chatGrp.emit('leave','Sai');
chatGrp.emit('join','Anjali');
chatGrp.emit('msg','Anjali','Hey Kashyap!');
chatGrp.emit('leave','Kashyap');
chatGrp.emit('fetchActiveUsers');
// chatGrp.emit('auditLogs');
// chatGrp.emit('auditLogsToFile');
chatGrp.emit('updateAuditLogs');