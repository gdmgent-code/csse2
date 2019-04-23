export default async function sleepRandom(seconds = 5) {
  const promise = new Promise(resolve => {
    const ms = Math.round(Math.random() * 1000 * seconds)
    setTimeout(() => resolve(`Slept for ${ms}ms.`), ms)
  })
  console.log(await promise)
}