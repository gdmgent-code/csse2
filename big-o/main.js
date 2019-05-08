/**
 * O(1)
 *
 * The complexity is always the same, and therefore maximum 1 × time necessary to complete.
 *
 * @param {int} n
 */
function once (n) {
  let iteration = 1
  for (let i = 0; i < 9; i++) {
    console.log('iteration', `${iteration++}:`, 'i is', i, ', n is', n)
  }
}

/**
 * O(∞)
 *
 * The complexity keeps increasing.
 *
 * @param {int} n
 */
function endless (n) {
  let iteration = 1
  while (true) {
    console.log('iteration', `${iteration++}:`, 'n is', n)
  }
}

/**
 * O(n)
 *
 * The complexity is n × time necessary to complete.
 *
 * @param {int} n
 */
function linear (n) {
  let iteration = 1
  for (let i = 0; i < n; i++) {
    console.log('iteration', `${iteration++}:`, 'i is', i, '; n is', n)
  }
}

/**
 * O(n^2)
 *
 * @param {int} n
 */
function quadratic (n) {
  let iteration = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log('iteration', `${iteration++}:`, 'i is', i, '; j is', j, '; n is', n)
    }
  }
}

/**
 * O(n^3)
 *
 * @param {int} n
 */
function cubic (n) {
  let iteration = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log('iteration', `${iteration++}:`, 'i is', i, '; j is', j, '; k is', k, '; n is', n)
      }
    }
  }
}

/**
 * O(n^n)
 *
 * @param {int} n
 */
function polynomialN (n) {
  let iteration = 1
  for (let i = 0; i < n ** n; i++) {
    console.log('iteration', `${iteration++}:`, 'i is', i, '; n is', n)
  }
}

/**
 * O(log2(n))
 *
 * @param {int} n
 */
function logarithmic2 (n) {
  const base = 2
  for (let iteration = 1, i = base; i <= n; iteration++, i *= base) {
    console.log('iteration', `${iteration}:`, 'i is', i, '; n is', n)
  }
}

/**
 *  O(log10(n))
 *
 * @param {int} n
 */
function logarithmic10 (n) {
  const base = 10
  for (let iteration = 1, i = base; i <= n; iteration++, i *= base) {
    console.log('iteration', `${iteration}:`, 'i is', i, '; n is', n)
  }
}
