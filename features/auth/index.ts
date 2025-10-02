type SignupParams = {
  email: string;
  pwd: string;
  checkPwd: string;
};

export enum SignupStatus {
  NONE = 0,
  AVAILABLE = 1,
  EMAIL_EMPTY = 2,
  EMAIL_INVALID = 3,
  PWD_EMPTY = 4,
  PWD_INVALID = 5,
}

export function getAuth() {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3000/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   firstParam: "yourValue",
      //   secondParam: "yourOtherValue",
      // }),
    })
      .then((res) => {
        console.log(res);
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3000/user/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "id",
        pwd: "pwd",
      }),
    })
      .then((res) => {
        console.log(res);
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
  });
}

export function updateUser() {}

export function signIn() {}

export function signupValidation(input: SignupParams): SignupStatus {
  if (input.email === "") {
    return SignupStatus.EMAIL_EMPTY;
  } else if (input.email === "") {
    return SignupStatus.PWD_EMPTY;
  }

  return SignupStatus.AVAILABLE;
}
