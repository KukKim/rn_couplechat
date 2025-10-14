type LoginParams = {
  email: string;
  pwd: string;
};
type SignupParams = {
  email: string;
  pwd: string;
  checkPwd?: string;
};

export enum SignupStatus {
  NONE = 0,
  AVAILABLE = 1,
  EMAIL_EMPTY = 2,
  EMAIL_INVALID = 3,
  PWD_EMPTY = 4,
  PWD_INVALID = 5,
  PWD_DIFFER = 6,
}

export function getAuth() {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3000/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

export function loginUser(input: LoginParams): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3000/user/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: input.email,
        pwd: input.pwd,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        return err.json();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createUser(input: SignupParams): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3000/user/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: input.email,
        pwd: input.pwd,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        resolve({
          status: "success",
        });
      })
      .catch((err) => {
        return err.json();
      })
      .catch((err) => {
        reject({
          status: "fail",
          reason: err,
        });
      });
  });
}

export function updateUser() {}

export function signIn() {}

export function signupValidation(input: SignupParams): SignupStatus {
  if (input.email === "") {
    return SignupStatus.EMAIL_EMPTY;
  } else {
    const regex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!regex.test(input.email)) {
      return SignupStatus.EMAIL_INVALID;
    }
  }
  if (input.pwd === "") {
    return SignupStatus.PWD_EMPTY;
  } else {
    // 최소 8자, 대문자 1개 이상, 소문자 1개 이상, 특수문자 1개 이상
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (input.pwd !== input.checkPwd) {
      return SignupStatus.PWD_DIFFER;
    } else if (!regex.test(input.pwd)) {
      return SignupStatus.PWD_INVALID;
    }
  }

  return SignupStatus.AVAILABLE;
}
