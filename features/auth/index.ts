export function getAuth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

export function createUser() {}

export function updateUser() {}

export function signIn() {}
