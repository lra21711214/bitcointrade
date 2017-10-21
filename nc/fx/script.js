var config = {
    timePeriod: '1m'
}
var charts = [
    ['bitflyer', 'btcfxjpy', 'bitflyer'],
    ['bitfinex', 'btcusd', 'bitfinex'],
]
charts.forEach(function (chart) {
    chart.push(new cryptowatch.Embed(chart[0], chart[1], config))
    chart[3].mount('#' + chart[2])
})

document.getElementById('timePeriod').onchange = function(event) {
    charts.forEach(function (chart) {
        var cell = document.getElementById(chart[2])
        cell.removeChild(cell.firstChild)
        chart[3].opts.timePeriod = event.target.value
        chart[3].mount('#' + chart[2])
    })
}
