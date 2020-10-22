const { REFUSED } = require('dns');
const schedule = require ('node-schedule');
const tarefa = schedule.scheduleJob('*/5 * 8 * * 4', function(){
    console.log('Execuntando tarefa 1', new Date().getSeconds());
});

setTimeout(function(){
    tarefa.cancel()
    console.log('Cancelando tarefa');
} , 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 8
regra.second = 30


const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds());
})