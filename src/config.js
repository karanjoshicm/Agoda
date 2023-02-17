// const mode = "JAVA";

let BASE_URL = "";
let BASE_URL2 = "";
if (process.env.REACT_APP_MODE === "JAVA") {
  BASE_URL = process.env.REACT_APP_BASE_URL_FOR_JAVA;
  BASE_URL2 = process.env.REACT_APP_BASE_URL2;
} else if (process.env.REACT_APP_MODE === "RUBY") {
  BASE_URL = process.env.REACT_APP_BASE_URL_FOR_RUBY;
  BASE_URL2 = process.env.REACT_APP_BASE_URL_FOR_RUBY;
}

export default BASE_URL;
export { BASE_URL2 };
