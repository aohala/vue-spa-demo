import nprogress from 'nprogress'

let stack = 0
const TIMEOUT = 10000
let tid

export default {
  start () {
    if (!stack) {
      nprogress.start()
      tid = setTimeout(() => nprogress.done(), TIMEOUT)
    }
    stack++
  },
  done () {
    --stack
    if (!stack) {
      nprogress.done()
      clearTimeout(tid)
    }
  }
}
