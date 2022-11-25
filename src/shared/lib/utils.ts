/**
 * Creates random timeout between 0 and 1500 milliseconds
 */
export function wait(): Promise<void> {
  const timeout = Math.random() * 1500
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

/**
 * Creates unique id string from current date
 */
export function createUid(): string {
  return new Date().getTime().toString()
}
