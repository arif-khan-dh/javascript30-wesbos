const canvas = document.getElementById('draw')

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
canvas.width = document.body.scrollWidth
canvas.height = document.body.scrollHeight

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true
let lineWidth = 1

const ctx = canvas.getContext('2d')

ctx.lineCap = 'round'
ctx.lineCapJoin = 'round'
ctx.globalCompositeOperation = 'overlay'


canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true; // semi-colon is need befor array destructuring
    [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


function draw(e) {
    if(!isDrawing) return    
    ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`
    ctx.beginPath()    
    ctx.lineWidth = lineWidth
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)    
    ctx.stroke(); // semi-colon is need befor array destructuring
    [lastX, lastY] = [e.offsetX, e.offsetY]
    if(hue === 360) hue = 0
    if(lineWidth >= 100 || lineWidth < 1) {
        direction = !direction
    }
    if(direction) {
        lineWidth++
    } else {
        lineWidth--
    }
}
