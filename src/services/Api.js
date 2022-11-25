export function SignUp(name, email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "tokençjfljsdfsdfjidfisfisdioofmk",
        user: {
          name,
          email,
          password,
        },
      });
    }, 2000);
  });
}

export function SignIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "tokençjfljsdfsdfjidfisfisdioofmk",
        user: {
          name: "Steve Jobs",
          email: "email@email.com",
          password: "Senha@@0",
        },
      });
    }, 2000);
  });
}
